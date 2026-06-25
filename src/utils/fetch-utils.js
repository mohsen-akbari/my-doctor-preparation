import { toast } from "react-toastify";

export async function fetchWithToast(input, init = {}, successMessage) {
  const response = await fetch(input, {
    headers: { "content-type": "application/json" },
    ...init,
  });

  const result = await response.json();

  if (!response.ok) {
    let message = "خطای غیر منتظره رخ داد.";

    if ("error" in result) {
      message = result.error;
    }

    toast.error(message);
    return { error: message };
  }

  if (successMessage) {
    toast.success(successMessage);
  }

  return { data: result.data };
}
