import {expirationValueToPeriod} from "../components/extensions/badges/expiration_period";
import I18n from "i18n-js";

export const formatAdminNames = (staffContainer) => {
  const staff = staffContainer.staff || [];
  let names = staff
    .map((u) => u.user.firstName + " " + u.user.lastName)
    .slice(0, 1)
    .join(", ");
  if (staff.length > 1) {
    names += ` (+${staff.length - 1})`;
  }
  return names || "-";
};


export const expirationPeriod = (badgeclass) => {
  if (!badgeclass.expirationPeriod || badgeclass.expirationPeriod === 0) {
    return I18n.t("models.badgeclass.expiresAfterNever");
  }
  let period = expirationValueToPeriod(badgeclass.expirationPeriod);
  return period[0] + " " + period[1].name;
}


