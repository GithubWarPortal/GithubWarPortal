import * as React from "react";

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <p>Copyright © 2022 WarPortal.org - All Rights Reserved.</p>
      <div>
        <button onClick={handleOpen}>Terms and Conditions</button>
        {open ? (
          <><p>
                      Contracts between War Portal and you and your game are void if
                      characters do not follow the storyline provided by the War Portal
                      Universe. Contracts paid are final unless agreed by War Portal and
                      contract. You may upgrade a character contract to create new content
                      with War Portal with new stories and even characters, but that is
                      reserved for the Tier 1 packages. Brand identity and the
                      associations with the characters are important and what makes this a
                      great opportunity for indies. Key defining traits that are
                      inconsistent in games cause loss of retention and recognition. Tier
                      two packages are intended to save indie creators the most money, but
                      with the least flexibility. We provide a growing number of
                      characters and story that is increasingly more engaging on
                      advertising platforms, valuable for an indie to start monetizing
                      their projects and abilities.
                  </p><p>
                          Tier 2 contracts are meant to be
                          highly approachable with the lowest cost possible to access
                          character plot and engaging visuals for your game. Marketing is set
                          to benefit the Trademark and licensed characters which may or may
                          not benefit your independent game. Though we have good impressions,
                          a game's success is always multifaceted. Check our resourced tab for
                          independent marketing. Rights granted are for use to a single game
                          creation under that content's creator and the publishing and use in
                          commercial applications requires a vetted process which do not grant
                          exclusive rights to any of War Portal's content. War Portal forbids
                          unlawful behavior, hate speech, bullying, and spam.</p></>
  ):<div></div>}</div></>
        )}
