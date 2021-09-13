//TODO: add i18n in this repo

const messages_fr: any = {
  global : {
    nc        : "-",
    no        : "Non",
    yes       : "Oui",
    actions   : "Actions",
    search    : "Rechercher",
    cancel    : "Annuler",
    clear     : "Vider",
    valid     : "Valide",
    invalid   : "Invalid",
    load_more : "Charger plus",
    next      : "Suivant"
  },
  currency       : {
    symbol : {
      EUR : "€",
      USD : "$",
      GBP : "£",
      AUD : "AU$",
      BRL : "R$",
      CAD : "CA$",
      CHF : "Fr",
      SEK : "SEkr",
      JPY : "¥",
      SAR : "SAR",
      TCH : "{E,}"
    }
  },
  user : {
    gender : {
      MAN   : "Homme",
      WOMAN : "Femme"
    },
    investor : {
      type : {
        NATURAL : "Personne physique",
        LEGAL   : "Personne morale"
      },
      status : {
        validated          : "Validé",
        waiting_validation : "En attente",
        not_validated      : "Non validé"
      }
    },
    kyc : {
      status : {
        IN_REVIEW            : "En cours de revue",
        WAITING_INFO         : "En attente de pièces",
        WAITING_COUNTERPARTY : "En attente de contrepartie",
        WAITING_VALIDATION   : "En attente de validation",
        WAITING_FUNDING      : "En attente de financement"
      }
    },
    cosuscriber : {
      type : {
        CONJOINT     : "Co-souscripteur",
        USUFRUCTUARY : "Usufruitier"
      }
    }
  },
  wallet : {
    status : {
      LIGHT     : "Créé",
      CONFIRMED : "Validé",
      REJECTED  : "Rejeté",
      null      : "Non Créé"
    }
  }
}

export const T: any = messages_fr
