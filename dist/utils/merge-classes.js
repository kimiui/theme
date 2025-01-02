export function mergeClasses(baseClasses, conditionalClasses) {
    const base = baseClasses.filter(Boolean).join(' ');
    const conditional = Object.keys(conditionalClasses)
        .filter((key) => conditionalClasses[key])
        .join(' ');
    return [base, conditional].filter(Boolean).join(' ');
}
/**
 * Utility to merge multiple refs into one.
 * This ensures all refs receive the correct reference.
 */
export function mergeRefs(refs) {
    return (value) => {
        refs.forEach((ref) => {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(value);
            }
            else if ('current' in ref) {
                ref.current = value;
            }
        });
    };
}
