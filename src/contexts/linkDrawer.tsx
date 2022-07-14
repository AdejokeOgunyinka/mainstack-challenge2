import React, { useState } from "react";

export type LinkDrawerContextType = {
  link: string;
  title: string;
};

export interface LinkDrawerContextInterface {
  linkObjectArray: LinkDrawerContextType[];
  saveLinkObjectArray: (val: LinkDrawerContextType[]) => void;
}

const LinkDrawerContext = React.createContext<LinkDrawerContextInterface>({
  linkObjectArray: [],
  saveLinkObjectArray: () => {},
});

const LinkDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkObjectArray, setLinkObjectArray] = useState<
    LinkDrawerContextType[]
  >([]);

  const saveLinkObjectArray = (val: LinkDrawerContextType[]) => {
    setLinkObjectArray([...linkObjectArray, ...val]);
  };

  return (
    <LinkDrawerContext.Provider
      value={{
        linkObjectArray,
        saveLinkObjectArray,
      }}
    >
      {children}
    </LinkDrawerContext.Provider>
  );
};

export { LinkDrawerContext, LinkDrawerProvider };
