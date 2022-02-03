const ACCESS_TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refreshToken";
const LAST_INVESTMENT_KEY = "lastInvestment";
const SHARED_LINK = "sharedLink";

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setSharedLink = (link: string) => {
  localStorage.setItem(SHARED_LINK, link);
};

export const getSharedLink = () => {
  const link = localStorage.getItem(SHARED_LINK);
  localStorage.removeItem(SHARED_LINK);

  return link;
};

export const clearAuthData = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(LAST_INVESTMENT_KEY);
};

export const lastInvestment = {
  setValue: (path: string) => {
    localStorage.setItem(LAST_INVESTMENT_KEY, path);
  },
  getValue: () => {
    const path = localStorage.getItem(LAST_INVESTMENT_KEY);
    if (path?.includes("investment")) return path;
    return null;
  },
};
