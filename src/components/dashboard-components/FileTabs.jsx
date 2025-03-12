import { Avatar, AvatarFallback } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function FileTabs() {
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
      <TabsList className="flex justify-between w-full  p-0">
        <TabsTrigger className="text-sm p-1 inline-block" value="comments">
          Comments
        </TabsTrigger>
        <TabsTrigger className="text-sm p-1 inline-block" value="details">
          Details
        </TabsTrigger>
        <TabsTrigger className="text-sm p-1 inline-block" value="workflow">
          Workflow
        </TabsTrigger>
      </TabsList>
      <TabsContent value="comments" className="">
        <div className="flex items-center mt-4 mb-4 ">
          <Avatar className="h-8 w-8 mr-2 bg-[#E2001029]">
            <AvatarFallback className="font-bold">LA</AvatarFallback>
          </Avatar>
          <div className="border rounded-xl p-2">
            <p className="mb-2 font-semibold">Lanre Akomolafe</p>
            <p>
              <span className="font-semibold">@oreoluwa</span> Is there anything
              you would like to add before I send it?
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 mb-4 ">
          <Avatar className="h-8 w-8 mr-2 bg-[#E2001029]">
            <AvatarFallback className="font-bold">LA</AvatarFallback>
          </Avatar>
          <div className="border rounded-xl p-2">
            <p className="mb-2 font-semibold">Lanre Akomolafe</p>
            <p>
              <span className="font-semibold">@oreoluwa</span> Is there anything
              you would like to add before I send it?
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 mb-4 ">
          <Avatar className="h-8 w-8 mr-2 bg-[#E2001029]">
            <AvatarFallback className="font-bold">LA</AvatarFallback>
          </Avatar>
          <div className="border rounded-xl p-2">
            <p className="mb-2 font-semibold">Lanre Akomolafe</p>
            <p>
              <span className="font-semibold">@oreoluwa</span> Is there anything
              you would like to add before I send it?
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="details" className=""></TabsContent>
      <TabsContent value="workflow">
        <p>workflow</p>
      </TabsContent>
    </Tabs>
  );
}
