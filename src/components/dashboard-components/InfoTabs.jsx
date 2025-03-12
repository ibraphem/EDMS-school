import { FolderClosed } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function InfoTabs() {
  const fileDetails = [
    { label: "Total files", value: "233", icon: <File className="h-5 w-5" /> },
    {
      label: "Total documents",
      value: "2,509",
    },
    {
      label: "Total size",
      value: "45 MB",
    },
    {
      label: "Last modified",
      value: "25 Sep, 2024",
    },
    {
      label: "Modified by",
      value: "Oreoluwa George",
    },
    { label: "Type", value: "Jacket" },
  ];
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2 p-0">
        <TabsTrigger className="text-sm p-1" value="details">
          Details
        </TabsTrigger>
        <TabsTrigger value="activities">Activities</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="">
        <div className="flex flex-col w-full h-[150px] justify-center items-center">
          <div className="bg-[#092FEE29] text-[#092FEE] p-4 rounded-2xl">
            <FolderClosed />
          </div>
          <h3 className="font-semibold text-[#092FEE]  my-2">Info</h3>
        </div>

        <h3 className="font-semibold text xl mb-4">Properties</h3>
        <div className="space-y-3">
          {fileDetails.map((detail, index) => (
            <div key={index} className="flex items-center ">
              <span className="text-input">{detail.label}:</span>
              <span className="font-semibold ml-auto">{detail.value}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-input mt-6 mb-4">Description</h3>
        <p className="text-input">
          There are multiple files in this jacket and some can be viewed from
          the archives.
        </p>
      </TabsContent>
      <TabsContent value="activities">
        <p>Activities</p>
      </TabsContent>
    </Tabs>
  );
}
