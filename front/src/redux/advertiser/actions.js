export function dataOfCustomerSendToBase(subject, nameBlogger, cash) {
  return async () => {
    await fetch("/advertiser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, nameBlogger, cash }),
    });
  };
}
