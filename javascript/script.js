window.addEventListener("DOMContentLoaded", () => {
  const languages = [
    {
      country: "Amharic",
      code: "am",
      lang: "",
    },
    {
      country: "Arabic",
      code: "ar",
      lang: "",
    },
    {
      country: "Basque",
      code: "eu",
      lang: "",
    },
    {
      country: "Bengali",
      code: "bn",
      lang: "",
    },
    {
      country: "English (UK)",
      code: "en-GB",
      lang: "en-GB",
    },
    {
      country: "Portuguese (Brazil)",
      code: "pt-BR",
      lang: "pt-BR",
    },
    {
      country: "Bulgarian",
      code: "bg",
      lang: "",
    },
    {
      country: "Catalan",
      code: "ca",
      lang: "",
    },
    {
      country: "Cherokee",
      code: "chr",
      lang: "",
    },
    {
      country: "Croatian",
      code: "hr",
      lang: "",
    },
    {
      country: "Czech",
      code: "cs",
      lang: "",
    },
    {
      country: "Danish",
      code: "da",
      lang: "",
    },
    {
      country: "Dutch",
      code: "nl",
      lang: "",
    },
    {
      country: "English (US)",
      code: "en",
      lang: "en-US",
    },
    {
      country: "Estonian",
      code: "et",
      lang: "",
    },
    {
      country: "Filipino",
      code: "fil",
      lang: "",
    },
    {
      country: "Finnish",
      code: "fi",
      lang: "",
    },
    {
      country: "French",
      code: "fr",
      lang: "fr-FR",
    },
    {
      country: "German",
      code: "de",
      lang: "de-DE",
    },
    {
      country: "Greek",
      code: "	el",
      lang: "",
    },
    {
      country: "Gujarati",
      code: "gu",
      lang: "",
    },
    {
      country: "Hebrew",
      code: "iw",
      lang: "",
    },
    {
      country: "Hindi",
      code: "hi",
      lang: "hi-IN",
    },
    {
      country: "Hungarian",
      code: "hu",
      lang: "",
    },
    {
      country: "Icelandic",
      code: "is",
      lang: "",
    },
    {
      country: "Indonesian",
      code: "id",
      lang: "id-ID",
    },
    {
      country: "Italian",
      code: "it",
      lang: "it-IT",
    },
    {
      country: "Japanese",
      code: "ja",
      lang: "ja-JP",
    },
    {
      country: "Kannada",
      code: "kn",
      lang: "",
    },
    {
      country: "Korean",
      code: "ko",
      lang: "ko-KR",
    },
    {
      country: "Latvian",
      code: "lv",
      lang: "",
    },
    {
      country: "Lithuanian",
      code: "lt",
      lang: "",
    },
    {
      country: "Malay",
      code: "ms",
      lang: "",
    },
    {
      country: "Malayalam",
      code: "ml",
      lang: "",
    },
    {
      country: "Marathi",
      code: "mr",
      lang: "",
    },
    {
      country: "Norwegian",
      code: "no",
      lang: "",
    },
    {
      country: "Polish",
      code: "pl",
      lang: "pl-PL",
    },
    {
      country: "Portuguese (Portugal)",
      code: "pt-PT",
      lang: "pt-BR",
    },
    {
      country: "Romanian",
      code: "ro",
      lang: "",
    },
    {
      country: "Russian",
      code: "ru",
      lang: "ru-RU",
    },
    {
      country: "Serbian",
      code: "sr",
      lang: "",
    },
    {
      country: "Chinese (PRC)",
      code: "zh-CN",
      lang: "",
    },
    {
      country: "Slovak",
      code: "sk",
      lang: "",
    },
    {
      country: "Slovenian",
      code: "sl",
      lang: "",
    },
    {
      country: "Spanish",
      code: "es",
      lang: "es-ES",
    },
    {
      country: "Swahili",
      code: "sw",
      lang: "",
    },
    {
      country: "Swedish",
      code: "sv",
      lang: "",
    },
    {
      country: "Tamil",
      code: "ta",
      lang: "",
    },
    {
      country: "Telugu",
      code: "te",
      lang: "",
    },
    {
      country: "Thai",
      code: "th",
      lang: "",
    },
    {
      country: "Chinese (Taiwan)",
      code: "zh-T",
      lang: "zh-TW",
    },
    {
      country: "Turkish",
      code: "tr",
      lang: "",
    },
    {
      country: "Urdu",
      code: "ur",
      lang: "",
    },
    {
      country: "Ukrainian",
      code: "uk",
      lang: "",
    },
    {
      country: "Uzbek",
      code: "uz",
      lang: "",
    },
    {
      country: "Vietnamese",
      code: "vi",
      lang: "",
    },
    {
      country: "Welsh",
      code: "cy",
      lang: "",
    },
  ];

  // Global Variables
  const BASE_URL =
    "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const API_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "9be851b01amsh5bc72c62fbf856bp16fd3bjsn09789c02eeb3",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  };

  // Selectors DOM
  const selects = document.querySelectorAll("select");
  const textareas = document.querySelectorAll("textarea");
  const clearBtns = document.querySelectorAll(".clear");
  const volumeBtns = document.querySelectorAll(".volume_btn");
  const copyBtns = document.querySelectorAll(".copy_btn");

  clearBtns.forEach((clearBtn) => {
    clearBtn.addEventListener("click", () => {
      if (clearBtn.name === "text_field_1")
        document.querySelector(`#${clearBtn.name}`).value = "";
      else if (clearBtn.name === "text_field_2")
        document.querySelector(`#${clearBtn.name}`).value = "";
    });
  });

  copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener("click", () => {
      if (copyBtn.name === "text_field_1") {
        navigator.clipboard.writeText(
          document.querySelector(`#${copyBtn.name}`).value
        );
      } else if (copyBtn.name === "text_field_2") {
        navigator.clipboard.writeText(
          document.querySelector(`#${copyBtn.name}`).value
        );
      }
    });
  });

  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.country;
    selects.forEach((select) => select.appendChild(option.cloneNode(true)));
  });

  let text_field_1 = "";
  let text_field_2 = "";
  let select_lang_1 = {
    country: "Amharic",
    code: "am",
    lang: "en-US",
  };
  let select_lang_2 = {
    country: "Amharic",
    code: "am",
    lang: "en-US",
  };

  textareas.forEach((textarea) => {
    textarea.addEventListener("input", (e) => {
      const encodedParams = new URLSearchParams();
      const options = {
        method: "POST",
        url: `${BASE_URL}/detect`,
        headers: API_HEADERS,
        data: encodedParams,
      };

      if (e.target.name === "text_field_1") {
        text_field_1 = e.target.value;
        encodedParams.set("q", e.target.value);

        axios(options).then(({ data: { data } }) => {
          const resLangCode = data.detections[0][0].language;
          const c = languages.find((l) => l.code === resLangCode);
          document.querySelector("#language_code_1").innerHTML = `${c.country}`;
        });
      } else if (e.target.name === "text_field_2") {
        text_field_2 = e.target.value;
        encodedParams.set("q", e.target.value);

        axios(options).then(({ data: { data } }) => {
          const resLangCode = data.detections[0][0].language;
          const c = languages.find((l) => l.code === resLangCode);
          document.querySelector("#language_code_2").innerHTML = `${c.country}`;
        });
      }
    });
  });

  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      console.log(e.target.value);
      if (select.id === "language_1")
        select_lang_1 = languages.find((l) => l.code === e.target.value);
      if (select.id === "language_2")
        select_lang_2 = languages.find((l) => l.code === e.target.value);
    });
  });

  volumeBtns.forEach((volumeBtn) => {
    volumeBtn.addEventListener("click", () => {
      if (volumeBtn.id === "text_field_volume_1")
        speakVoice(text_field_1, select_lang_1);
      else if (volumeBtn.id === "text_field_volume_2")
        speakVoice(text_field_2, select_lang_2);
    });
  });

  //*=== SPEAK FUNCTION ===*//
  async function speakVoice(value, select_lang) {
    const msg = new SpeechSynthesisUtterance(value);
    let voices = speechSynthesis.getVoices();
    let v = voices.find((v) => v.lang == select_lang.lang);
    msg.voice = v ? v : voices[0];
    msg.voiceURI = "native";
    msg.volume = 1000;
    msg.text = value;
    msg.lang = select_lang.code;
    speechSynthesis.speak(msg);
  }
});
