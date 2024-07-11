import { Editor } from "@tiptap/core";
import { Check, Trash, X } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { toast } from "react-hot-toast";


import { getUrlFromString } from "@/utils/get-url-from-string";

interface LinkSelectorProps {
  editor: Editor;
  showLinkSelector: boolean;
  setShowLinkSelector: Dispatch<SetStateAction<boolean>>;
}

export const LinkSelector: FC<LinkSelectorProps> = ({ editor, showLinkSelector, setShowLinkSelector }) => {




  const handleUrlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget[0] as HTMLInputElement;
    var url;
    try {
      url = getUrlFromString(input.value);
      toast.success("URL set successfully!")
    } catch (error) {
      toast.error("Invalid URL");
      return;
    }
    url && editor.chain().focus().setLink({ href: url }).run();
    setShowLinkSelector(false);
  };

  return (
    <div className="flex size-full min-w-[300px] items-center bg-red-700">

      {showLinkSelector && (
        <form
          onSubmit={handleUrlSubmit}
          className="flex w-full rounded bg-[#262625] p-1 animate-in fade-in slide-in-from-top-0"
        >
          <input
            autoFocus
            type="text"
            placeholder="Paste or type a link..."
            className="flex-1 bg-[#262625] text-sm text-white outline-none"
            defaultValue={editor.getAttributes("link").href || ""}
          />
          {editor.getAttributes("link").href ? (
            <button
              type="button"
              className="flex items-center rounded-sm p-1 text-red-600"
              onClick={() => {
                editor.chain().focus().unsetLink().run();
                setShowLinkSelector(false);
              }}
            >
              <Trash className="size-4" />
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="flex items-center rounded-sm p-1 text-white transition-all"
              >
                <Check className="size-4" />
              </button>
              <button
                type="button"
                className="flex items-center rounded-sm pl-1 pr-0 text-white transition-all"
                onClick={() => setShowLinkSelector(false)}
              >
                <X className="size-4" />
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
};