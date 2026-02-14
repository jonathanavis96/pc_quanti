# Header Color Compensation for Transparent Scroll State

When the header becomes semi-transparent over a white background, the perceived color shifts. To keep the visual color matching the brand `pc-blue` (#2C02D9), compute a compensated base color for the given opacity.

## Formula

For each RGB channel:

```
Base = (Target - (1 - alpha) * 255) / alpha
```

Where:
- `Target` is the desired visible channel value (0–255)
- `alpha` is the opacity (0–1)

## Example (pc-blue at 75% opacity)

- Target color: `#2C02D9` → (44, 2, 217)
- alpha: 0.75

Computed base:
- R: (44 - 0.25 * 255) / 0.75 → 0
- G: (2 - 0.25 * 255) / 0.75 → 0
- B: (217 - 0.25 * 255) / 0.75 → 204

Resulting compensated color:

```
rgba(0, 0, 204, 0.75)
```

This keeps the perceived color aligned with `pc-blue` when blended over white.
