// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
        presetRemToPx({baseFontSize: 4}),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
