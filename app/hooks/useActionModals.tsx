import { showNotification } from "@mantine/notifications";
import { useModals } from "@mantine/modals";
import { RadioGroup, Radio } from "@mantine/core";

export function useActionModals() {
  const modals = useModals();
  const reportModal = () => {
    modals.openConfirmModal({
      title: "Report post",
      centered: true,
      children: (
        <>
          <RadioGroup
            orientation="vertical"
            label="Please select a reason for reporting this post."
            required
            mb="xl"
            size="sm"
            defaultValue="harmful"
          >
            <Radio value="harmful" label="Harmful content" />
            <Radio value="hate" label="Hate speech" />
            <Radio value="spam" label="Spam" />
            <Radio value="incorrect" label="Posted in the wrong section" />
          </RadioGroup>
        </>
      ),
      labels: { confirm: "Report post", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        showNotification({
          title: "Post reported",
          message: "Thank you for reporting this post and keeping querie safe.",
          color: "blue",
        });
      },
    });
  };

  return { reportModal };
}
