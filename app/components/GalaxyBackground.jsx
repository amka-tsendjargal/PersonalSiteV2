import Galaxy from "./Galaxy"

export default function GalaxyBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Galaxy
                mouseInteraction={true}
                mouseRepulsion={true}
                density={0.8}
                glowIntensity={0.3}
                saturation={0}
                repulsionStrength={0.3}
                starSpeed={0.2}
                speed={0.1}
            />
        </div>
    )
}