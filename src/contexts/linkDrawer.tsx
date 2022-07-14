import React, { useState } from "react";

export type LinkDrawerContextType = {
  link: string;
  title: string;
};

export interface LinkDrawerContextInterface {
  linkObjectArray: LinkDrawerContextType[];
  saveLinkObjectArray: (val: LinkDrawerContextType[]) => void;
  totalLinkObjectArray: Array<any>;
  saveMoreLinks: (val: Array<any>) => void;
}

const LinkDrawerContext = React.createContext<LinkDrawerContextInterface>({
  linkObjectArray: [],
  saveLinkObjectArray: () => {},
  totalLinkObjectArray: [],
  saveMoreLinks: () => {},
});

const LinkDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkObjectArray, setLinkObjectArray] = useState<
    LinkDrawerContextType[]
  >([]);

  const saveLinkObjectArray = (val: LinkDrawerContextType[]) => {
    setLinkObjectArray([...linkObjectArray, ...val]);
  };

  const [totalLinkObjectArray, setTotalLinkObjectArray] = useState<Array<any>>(
    []
  );
  const saveMoreLinks = (val: Array<any>) => {
    setTotalLinkObjectArray([...totalLinkObjectArray, ...val]);
  };

  return (
    <LinkDrawerContext.Provider
      value={{
        linkObjectArray,
        saveLinkObjectArray,
        totalLinkObjectArray,
        saveMoreLinks,
      }}
    >
      {children}
    </LinkDrawerContext.Provider>
  );
};

export { LinkDrawerContext, LinkDrawerProvider };
