module.exports = process.env.LOCALE ? {
    ttag: { resolve: { translations: `i18n/${process.env.LOCALE}.po`}}
}: {}