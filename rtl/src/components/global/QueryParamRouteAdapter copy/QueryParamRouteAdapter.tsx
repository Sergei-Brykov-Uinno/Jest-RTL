import { PropsWithChildren, useMemo } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';

const QueryParamRouteAdapter = ({ children }: PropsWithChildren<unknown>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = useMemo(
    () => ({
      replace(adapterLocation: Location) {
        navigate(adapterLocation, { replace: true, state: adapterLocation.state });
      },
      push(adapterLocation: Location) {
        navigate(adapterLocation, { replace: false, state: adapterLocation.state });
      },
    }),
    [navigate],
  );

  // TODO: Fix it when "use-query-params" will be ready to the react-router-v6
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return children({ history: adaptedHistory, location });
};

export { QueryParamRouteAdapter };
