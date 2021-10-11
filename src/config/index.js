import CreditCardIcon from "@material-ui/icons/CreditCard";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import WifiIcon from "@material-ui/icons/Wifi";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const CATEGORIES_MAPPER = {
  credit_card: {
    displayName: "Credit Card",
    component: CreditCardIcon,
  },
  home: {
    displayName: "Home",
    component: HomeIcon,
  },
  phone: {
    displayName: "Phone",
    component: PhoneIcon,
  },
  internet: {
    displayName: "Internet",
    component: WifiIcon,
  },
  other: {
    displayName: "Other",
    component: AttachMoneyIcon,
  },
};
