import * as Tone from "tone";

export default function playNote(note, e) {
  if (e !== undefined) e.stopPropagation();

  const synth = new Tone.Synth();
  synth.oscillator.type = "sine";
  synth.toDestination();
  const now = Tone.now();

  switch (note.toLowerCase()) {
    case "d":
      return synth.triggerAttackRelease("C4", "8n", now);
    case "r":
      return synth.triggerAttackRelease("C#4", "8n", now);
    case "f":
      return synth.triggerAttackRelease("D4", "8n", now);
    case "t":
      return synth.triggerAttackRelease("D#4", "8n", now);
    case "g":
      return synth.triggerAttackRelease("E4", "8n", now);
    case "h":
      return synth.triggerAttackRelease("F4", "8n", now);
    case "u":
      return synth.triggerAttackRelease("F#4", "8n", now);
    case "j":
      return synth.triggerAttackRelease("G4", "8n", now);
    case "i":
      return synth.triggerAttackRelease("G#4", "8n", now);
    case "k":
      return synth.triggerAttackRelease("A4", "8n", now);
    case "o":
      return synth.triggerAttackRelease("A#4", "8n", now);
    case "l":
      return synth.triggerAttackRelease("B4", "8n", now);
  }
}
