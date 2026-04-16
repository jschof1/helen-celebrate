#!/usr/bin/env python3
"""Generate celebrant services grid images via Gemini (Nano Banana Pro). Requires GEMINI_API_KEY."""

from __future__ import annotations

import os
import time
from pathlib import Path

from google import genai
from google.genai import types

REPO = Path(__file__).resolve().parents[1]
OUT_DIR = REPO / "attached_assets" / "stock_images"

# Photorealistic, UK celebrant context; no readable text or logos in frame.
JOBS: list[tuple[str, str]] = [
    (
        "service_funeral_planning.jpg",
        "Photorealistic editorial photograph: interior of a calm British crematorium chapel, soft daylight, cream walls, simple floral tribute in ivory and green, wooden chairs, empty and peaceful, dignified mood, 35mm lens, shallow depth of field, no people, no text.",
    ),
    (
        "service_eulogy_writing.jpg",
        "Photorealistic close-up: open linen notebook, fountain pen, single cream rose, soft natural window light on a dark oak table, contemplative mood, UK home interior, no text, no faces.",
    ),
    (
        "service_scattering_ashes.jpg",
        "Photorealistic UK coastal landscape at golden hour: chalk cliffs, calm sea, wide empty beach, gentle sky, serene and respectful atmosphere, Dorset-style coastline, no people, no text.",
    ),
    (
        "service_memorial.jpg",
        "Photorealistic outdoor English garden memorial: small group of people seen from behind at a distance among roses and yew hedges, warm afternoon light, respectful gathering, soft focus background, no identifiable faces, no text.",
    ),
    (
        "service_wedding.jpg",
        "Photorealistic outdoor wedding ceremony in rolling English countryside: floral arch, grass aisle, empty chairs, summer soft light, Dorset hills in background, editorial wedding photography style, no people, no text.",
    ),
    (
        "service_vow_renewal.jpg",
        "Photorealistic romantic garden scene: mature couple seen from behind, holding hands, walking a rose-lined path at sunset, soft golden light, elegant but relaxed formal attire, no faces visible, no text.",
    ),
]


def main() -> None:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise SystemExit("GEMINI_API_KEY is not set")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=api_key)

    for filename, prompt in JOBS:
        out_path = OUT_DIR / filename
        print(f"Generating {filename}...")
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio="1:1",
                    image_size="2K",
                ),
            ),
        )
        saved = False
        for part in response.parts:
            if part.inline_data:
                part.as_image().save(str(out_path))
                saved = True
                break
        if not saved:
            raise RuntimeError(f"No image in response for {filename}")
        time.sleep(2)  # light rate pacing

    print("Done:", OUT_DIR)


if __name__ == "__main__":
    main()
