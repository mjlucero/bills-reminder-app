import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import WifiIcon from "@material-ui/icons/Wifi";

export const CATEGORIES_MAPPER = {
  credit_card: {
    displayName: "Credit Card",
    component: CreditCardIcon,
  },
  home: {
    displayName: "Home",
    component: HomeIcon,
  },
  internet: {
    displayName: "Internet",
    component: WifiIcon,
  },
  other: {
    displayName: "Other",
    component: AttachMoneyIcon,
  },
  phone: {
    displayName: "Phone",
    component: PhoneIcon,
  },
};
