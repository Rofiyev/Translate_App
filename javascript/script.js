window.addEventListener("DOMContentLoaded", () => {
  const languages = [
    {
      country: "Amharic",
      code: "am",
    },
    {
      country: "Arabic",
      code: "ar",
    },
    {
      country: "Basque",
      code: "eu",
    },
    {
      country: "Bengali",
      code: "bn",
    },
    {
      country: "English (UK)",
      code: "en-GB",
    },
    {
      country: "Portuguese (Brazil)",
      code: "pt-BR",
    },
    {
      country: "Bulgarian",
      code: "bg",
    },
    {
      country: "Catalan",
      code: "ca",
    },
    {
      country: "Cherokee",
      code: "chr",
    },
    {
      country: "Croatian",
      code: "	hr",
    },
    {
      country: "Czech",
      code: "cs",
    },
    {
      country: "Danish",
      code: "da",
    },
    {
      country: "Dutch",
      code: "nl",
    },
    {
      country: "English (US)",
      code: "en",
    },
    {
      country: "Estonian",
      code: "et",
    },
    {
      country: "Filipino",
      code: "fil",
    },
    {
      country: "Finnish",
      code: "fi",
    },
    {
      country: "French",
      code: "fr",
    },
    {
      country: "German",
      code: "de",
    },
    {
      country: "Greek",
      code: "	el",
    },
    {
      country: "Gujarati",
      code: "gu",
    },
    {
      country: "Hebrew",
      code: "iw",
    },
    {
      country: "Hindi",
      code: "hi",
    },
    {
      country: "Hungarian",
      code: "hu",
    },
    {
      country: "Icelandic",
      code: "is",
    },
    {
      country: "Indonesian",
      code: "id",
    },
    {
      country: "Italian",
      code: "it",
    },
    {
      country: "Japanese",
      code: "ja",
    },
    {
      country: "Kannada",
      code: "kn",
    },
    {
      country: "Korean",
      code: "ko",
    },
    {
      country: "Latvian",
      code: "lv",
    },
    {
      country: "Lithuanian",
      code: "lt",
    },
    {
      country: "Malay",
      code: "ms",
    },
    {
      country: "Malayalam",
      code: "ml",
    },
    {
      country: "Marathi",
      code: "mr",
    },
    {
      country: "Norwegian",
      code: "no",
    },
    {
      country: "Polish",
      code: "pl",
    },
    {
      country: "Portuguese (Portugal)",
      code: "pt-PT",
    },
    {
      country: "Romanian",
      code: "ro",
    },
    {
      country: "Russian",
      code: "ru",
    },
    {
      country: "Serbian",
      code: "sr",
    },
    {
      country: "Chinese (PRC)",
      code: "zh-CN",
    },
    {
      country: "Slovak",
      code: "sk",
    },
    {
      country: "Slovenian",
      code: "sl",
    },
    {
      country: "Spanish",
      code: "es",
    },
    {
      country: "Swahili",
      code: "sw",
    },
    {
      country: "Swedish",
      code: "sv",
    },
    {
      country: "Tamil",
      code: "ta",
    },
    {
      country: "Telugu",
      code: "te",
    },
    {
      country: "Thai",
      code: "th",
    },
    {
      country: "Chinese (Taiwan)",
      code: "zh-TW",
    },
    {
      country: "Turkish",
      code: "tr",
    },
    {
      country: "Urdu",
      code: "ur",
    },
    {
      country: "Ukrainian",
      code: "uk",
    },
    {
      country: "Uzbek",
      code: "uz",
    },
    {
      country: "Vietnamese",
      code: "vi",
    },
    {
      country: "Welsh",
      code: "cy",
    },
  ];

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
    lang: languages[0].code,
  };
  let select_lang_2 = {
    lang: languages[0].code,
  };

  textareas.forEach((textarea) => {
    textarea.addEventListener("input", (e) => {
      if (e.target.name === "text_field_1") text_field_1 = e.target.value;
      else if (e.target.name === "text_field_2") text_field_2 = e.target.value;
    });
  });

  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      if (select.id === "language_1") select_lang_1 = { lang: e.target.value };
      if (select.id === "language_2") select_lang_2 = { lang: e.target.value };
    });
  });

  volumeBtns.forEach((volumeBtn) => {
    volumeBtn.addEventListener("click", () => {
      if (volumeBtn.id === "text_field_volume_1")
        speakVoice(text_field_1, select_lang_1.lang);
      else if (volumeBtn.id === "text_field_volume_2")
        speakVoice(text_field_2, select_lang_2.lang);
    });
  });

  //*=== SPEAK FUNCTION ===*//
  function speakVoice(value, lang) {
    const msg = new SpeechSynthesisUtterance(value);
    let voices = speechSynthesis.getVoices();
    msg.voice = voices[0];
    msg.voiceURI = "native";
    msg.volume = 1000;
    msg.text = value;
    msg.lang = lang;
    speechSynthesis.speak(msg);
  }
});
