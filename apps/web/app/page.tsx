import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <Menu />
      <Editor />
    </div>
  );
}
