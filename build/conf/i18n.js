import { amount_suggest_msg_fr } from '../components/amount-suggest/messages/messages.fr.js';
import { item_pickers_msg_fr } from '../components/items-picker/messages/messages.fr.js';
import { datatable_msg_fr } from '../components/datatable/messages/messages.fr.js';

//TODO: add i18n in this repo
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
    datatable: datatable_msg_fr,
    amount_suggest: amount_suggest_msg_fr,
    items_pickers: item_pickers_msg_fr,
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
var T = messages_fr;

export { T };
//# sourceMappingURL=i18n.js.map
