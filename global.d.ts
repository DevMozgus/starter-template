// Use type safe message keys with `next-intl`
type Messages = typeof import("./locale/en.json") | typeof import("./locale/de.json")
declare interface IntlMessages extends Messages {}
