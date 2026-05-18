const languages = {
    en: {
        name: "Inglese",
        flag: "🇬🇧",
    },
    it: {
        name: "Italiano",
        flag: "🇮🇹",
    },
    fr: {
        name: "Francese",
        flag: "🇫🇷",
    },
    es: {
        name: "Spagnolo",
        flag: "🇪🇸",
    },
    de: {
        name: "Tedesco",
        flag: "🇩🇪",
    },
    ja: {
        name: "Giapponese",
        flag: "🇯🇵",
    },
    ko: {
        name: "Coreano",
        flag: "🇰🇷",
    },
    zh: {
        name: "Cinese",
        flag: "🇨🇳",
    },
    pt: {
        name: "Portoghese",
        flag: "🇵🇹",
    },
    ru: {
        name: "Russo",
        flag: "🇷🇺",
    },
};

export function getLanguage(languageCode) {
    return languages[languageCode] || {
        name: languageCode.toUpperCase(),
        flag: "🏳️",
    };
}