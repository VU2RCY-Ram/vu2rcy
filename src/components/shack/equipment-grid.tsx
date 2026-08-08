import { EquipmentCard } from "@/components/shack/equipment-card"
import type { Equipment } from "@/lib/data/shack"

export function EquipmentGrid({
  items,
  categorySlug,
}: {
  items: Equipment[]
  categorySlug: string
}) {
  return (
    <div
      id="equipment-grid"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((item) => (
        <EquipmentCard
          key={item.slug}
          item={item}
          categorySlug={categorySlug}
        />
      ))}
    </div>
  )
}
