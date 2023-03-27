import {useState, useEffect} from "react";
export default function handlePicker() {
    const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
    const [oauthToken, setOAuthToken] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    useEffect(() => {
    const onApiLoad = () => {
      window.gapi.load("auth", onAuthApiLoad);
      window.gapi.load("picker", onPickerApiLoad);
    };

    const onAuthApiLoad = () => {
      // Initialize the Google API client with your client ID and required scopes
      window.gapi.auth.authorize(
        {
          client_id: "YOUR_CLIENT_ID",
          scope: "YOUR_SCOPES",
          immediate: false, // Set immediate to true
        },
        handleAuthResult
      );
    };

    const onPickerApiLoad = () => {
      setPickerApiLoaded(true);
    };

    const handleAuthResult = (authResult) => {
      if (authResult && !authResult.error) {
        setOAuthToken(authResult.access_token);
      }
    };

    // Load the Google API client and the Picker API
    window.gapi.load("client:auth2:picker", onApiLoad);
  }, []);
}