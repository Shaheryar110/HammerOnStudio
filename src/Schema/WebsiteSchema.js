export let webSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Hammer On Studios",
  url: "https://hammeronstudios.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hammeronstudios.com/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
