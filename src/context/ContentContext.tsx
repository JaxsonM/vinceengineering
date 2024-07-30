// src/context/ContentContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { createClient, EntryCollection } from 'contentful';

const client = createClient({
  space: 'nuncfldsauzx',
  accessToken: '22-IUa8HzwoEepJLcWlzuAHtgUf6fM5Owgw4KiJqW7s',
});

interface ContentContextType {
  content: { [key: string]: any };
  loading: boolean;
}

export const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const entries: EntryCollection<any> = await client.getEntries();
        const allContent = entries.items.reduce((acc: { [key: string]: any }, item: any) => {
          acc[item.sys.contentType.sys.id] = item.fields;
          return acc;
        }, {});
        setContent(allContent);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching content', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
};
