import { useReducer, useEffect } from "react";
import { BackendSubscription } from "../../../utils/backend";

/**
 * Custom hooks that encapsulates working with backend data.
 */
export const useBackendSubscription = ({ aggregationWindow }) => {
  const [events, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add":
        return [...state, action.event];
      case "reset":
        return [];
      default:
        return state;
    }
  });

  useEffect(() => {
    const backend = new BackendSubscription({
      aggregationWindow,
      listener: event => {
        dispatch({
          type: "add",
          event
        });
      }
    });

    return () => {
      dispatch({ type: "reset" });
      backend.cleanup();
    };
  }, [aggregationWindow]);

  return events;
};
