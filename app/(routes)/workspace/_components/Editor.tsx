"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Paragraph from "@editorjs/paragraph";
import Warning from "@editorjs/warning";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "react-hot-toast";
import { FILE } from "../../dashboard/_components/FileList";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
import NestedList from "@editorjs/nested-list";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Add text, and draw anything and save the document file",
        // text:"Add text, and draw anything and save the document file",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

const safeParseJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Invalid JSON:", e);
    return rawDocument; // Fallback to rawDocument if JSON is invalid
  }
};

function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement | null>(null);
  const updateDocument = useMutation(api.files.updateDocument);
  const [document, setDocument] = useState(rawDocument);

  useEffect(() => {
    if (holderRef.current) {
      initEditor();
    }

    return () => {
      if (editorRef.current) {
        editorRef.current?.destroy();
        editorRef.current = null;
      }
    };
  }, [fileData]);

  useEffect(() => {
    console.log("Trigger Value:", onSaveTrigger);
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editorData =
      fileData && fileData.document
        ? safeParseJSON(fileData.document)
        : rawDocument;
    editorRef.current = new EditorJS({
      holder: holderRef.current?.id || "editorjs",
      data: editorData,
      tools: {
        header: {
          class: Header as any,
          shortcut: "SHIFT+H",
          config: {
            placeholder: "Enter a Header",
          },
        },
        list: {
          class: List as any,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist as any,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph as any,
          inlineToolbar: true,
        },
        warning: {
          class: Warning as any,
          inlineToolbar: true,
          config: {
            titlePlaceholder: "Warning title",
            messagePlaceholder: "Warning message",
          },
        },
        image: {
          class: SimpleImage,
          inlineToolbar: true,
        },
        quote: {
          class: Quote as any,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        table: {
          class: Table as any,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
            maxRows: 5,
            maxCols: 5,
          },
        },
        underline: {
          class: Underline as any,
        },
        nestedList: {
          class: NestedList as any,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
            defaultItem: "",
          },
        },
      },
    });
  };

  const onSaveDocument = () => {
    if (editorRef.current) {
      editorRef.current
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          }).then(
            (resp) => {
              toast("Document Save!");
            },
            (e) => {
              toast("Server Error!");
            }
          );
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  return (
    <div className="p-4 sm:px-8 md:px-16 lg:px-10">
      <div ref={holderRef} id="editorjs" className="z-100"></div>
    </div>
  );
}

export default Editor;
