import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const notAllowed = ["isLoading", "children"];

export const ActionButton = (props) => {
  const { isLoading, children } = props;

  const filteredProps = Object.keys(props)
    .filter((key) => !notAllowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});

  return (
    <Button {...filteredProps}>
      {!isLoading ? children : <CircularProgress size={24} />}
    </Button>
  );
};
