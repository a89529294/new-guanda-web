export type LinkProp = { label: string; path: string };

export const main_routes: LinkProp[] = [
  { label: "公司簡介", path: "/about-us" },
  { label: "GD-STD", path: "/gd-std" },
  { label: "自動化產線", path: "/automation" },
  { label: "ERP軟體", path: "/erp-software" },
  { label: "QRcode鐵牌", path: "/qrcode-metal-plate" },
];
export const side_routes: LinkProp[] = [{ label: "聯絡我們", path: "/contact-us" }];
export const invalid_routes = [{ label: "企業登入" }];
