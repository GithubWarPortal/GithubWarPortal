import { useState} from "react";
export default function Loader() {
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
  const [oauthToken, setOAuthToken] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const handlePickerSelect = (data) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const fileId = data.docs[0].id;
      console.log(`File ID: ${fileId}`);
    }
    setShowPicker(false);
  };

  const createPicker = () => {
    if (pickerApiLoaded && oauthToken) {
      const view = new window.google.picker.View(
        window.google.picker.ViewId.DOCS
      );
      view.setMimeTypes("image/png,image/jpeg,image/jpg");
      view.setSelectMultiple(false);

      const picker = new window.google.picker.PickerBuilder()
        .enableFeature(window.google.picker.Feature.NAV_HIDDEN)
        .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
        .setAppId("YOUR_APP_ID")
        .setOAuthToken(oauthToken)
        .addView(view)
        .setDeveloperKey("YOUR_DEVELOPER_KEY")
        .setCallback(handlePickerSelect)
        .build();
      picker.setVisible(true);
    }
  };
}
