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
