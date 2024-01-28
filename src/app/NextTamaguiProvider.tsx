"use client";

import { useServerInsertedHTML } from "next/navigation";
import { TamaguiProvider } from "tamagui";
import { StyleSheet } from "react-native";

import "@tamagui/core/reset.css";

if (process.env.NODE_ENV === "production") {
  require("../../public/tamagui.css");
}

import config from "../../tamagui.config";

export function NextTamaguiProvider(props: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} />
        <style dangerouslySetInnerHTML={{ __html: config.getNewCSS() }} />
      </>
    );
  });

  // see Tamagui provider setup in the example above
  return <TamaguiProvider config={config}>{props.children}</TamaguiProvider>;
}
