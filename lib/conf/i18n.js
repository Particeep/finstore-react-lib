"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T = void 0;
//TODO: add i18n in this repo
var messages_1 = require("../components/messages");
var messages_fr = {
    global: {
        nc: "-",
        no: "Non",
        yes: "Oui",
        actions: "Actions",
        search: "Rechercher",
        cancel: "Annuler",
        clear: "Vider",
        valid: "Valide",
        invalid: "Invalid",
        load_more: "Charger plus",
        next: "Suivant"
    },
    datatable: messages_1.datatable_msg_fr,
    amount_suggest: messages_1.amount_suggest_msg_fr,
    items_pickers: messages_1.item_pickers_msg_fr,
    currency: {
        symbol: {
            EUR: "€",
            USD: "$",
            GBP: "£",
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CHF: "Fr",
            SEK: "SEkr",
            JPY: "¥",
            SAR: "SAR",
            TCH: "{E,}"
        }
    },
    user: {
        gender: {
            MAN: "Homme",
            WOMAN: "Femme"
        },
        investor: {
            type: {
                NATURAL: "Personne physique",
                LEGAL: "Personne morale"
            },
            status: {
                validated: "Validé",
                waiting_validation: "En attente",
                not_validated: "Non validé"
            }
        },
        kyc: {
            status: {
                IN_REVIEW: "En cours de revue",
                WAITING_INFO: "En attente de pièces",
                WAITING_COUNTERPARTY: "En attente de contrepartie",
                WAITING_VALIDATION: "En attente de validation",
                WAITING_FUNDING: "En attente de financement"
            }
        },
        cosuscriber: {
            type: {
                CONJOINT: "Co-souscripteur",
                USUFRUCTUARY: "Usufruitier"
            }
        }
    },
    wallet: {
        status: {
            LIGHT: "Créé",
            CONFIRMED: "Validé",
            REJECTED: "Rejeté",
            null: "Non Créé"
        }
    }
};
exports.T = messages_fr;
//# sourceMappingURL=i18n.js.map