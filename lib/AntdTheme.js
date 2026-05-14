export var ANT_D_THEME = {
  // === Brand Colors ===
  primaryColor: '#1677FF',
  primaryColorHover: '#4096FF',
  primaryColorActive: '#0958D9',
  primaryBorderColor: '#1677FF',

  // === Neutral Colors ===
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',

  // === Fill Colors ===
  colorBgContainer: '#FFFFFF',
  colorBgElevated: '#FFFFFF',
  colorBgLayout: '#F5F5F5',
  colorFill: 'rgba(0, 0, 0, 0.15)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.06)',

  // === Border ===
  colorBorder: '#D9D9D9',
  colorBorderSecondary: '#F0F0F0',
  colorPrimaryBorder: '#1677FF',

  // === Border Radius ===
  borderRadius: 6,
  borderRadiusLG: 8,
  borderRadiusSM: 4,

  // === Line ===
  lineWidth: 1,
  lineType: 'solid',

  // === Shadow ===
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
  boxShadowSecondary: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',

  // === Font ===
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontSize: 14,
  fontSizeSM: 12,
  fontSizeLG: 16,
  lineHeight: 1.5714,

  // === BPMN Element Specific ===
  taskBorderRadius: 8,
  eventStrokeWidth: 2,
  endEventStrokeWidth: 3,
  gatewayStrokeWidth: 2,
  connectionStrokeWidth: 1.5,
  innerOuterDist: 5,

  // === Semantic Colors ===
  successColor: '#52C41A',
  errorColor: '#FF4D4F',
  warningColor: '#FAAD14',
  infoColor: '#1677FF'
};

export function mergeTheme(customTheme) {
  if (!customTheme) {
    return ANT_D_THEME;
  }

  var result = {};
  var key;

  for (key in ANT_D_THEME) {
    result[key] = key in customTheme ? customTheme[key] : ANT_D_THEME[key];
  }

  return result;
}
