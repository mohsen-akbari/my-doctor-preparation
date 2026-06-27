"use client";

import { useRouter } from "next/navigation";

import MingcuteExitLine from "@/icons/MingcuteExitLine";

import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "./sign-out-button.module.css";

export default function SignOutButtonComponent({ className }) {
  const router = useRouter;

  const signOutButtonClickHandler = async () => {
    const result = await fetchWithToast(
      "/api/auth/sign-out",
      {
        method: "POST",
      },
      "خروج با موفقیت انجام شد.",
    );

    if (result.error) {
      return;
    }

    router.push("/");
  };
  return (
    <div className={styles["sign-out-button"]}>
      <button className={className} onClick={signOutButtonClickHandler}>
        <MingcuteExitLine />
        خروج
      </button>
    </div>
  );
}
