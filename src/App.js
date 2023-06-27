import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


export function App() {
  const docs = [
    { uri: require("./2023-18-06_Docker_INV-913CE8.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}