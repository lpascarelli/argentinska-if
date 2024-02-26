import { ComponentProps, ReactNode } from "react";

export interface ContentfulImage {
  fields: {
    title: string;
    description: string;
    file: {
      fileName: string;
      contentType: string;
      details: {
        image: {
          width: number;
          height: number;
        };
        size: number;
      };
      url: string;
    }
  };
}

export interface CustomTagProps {
  children: ReactNode;
  className?: string;
}

export interface AnchorProps extends ComponentProps<'a'> {
  href: string;
  children: ReactNode;
  className?: string
}
