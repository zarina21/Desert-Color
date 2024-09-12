
import Link from "next/link";
import MiniaturaProduct from "../../../components/miniaturaProduct";
import MenuShop from "../../../components/cuerpo/menuShop";

export default function shopPage() {
    return (
        <div>
            <div class="fixed-grid has-6-cols">
                <div class="grid">
                    <div class="cell is-col-span-1">
                        <MenuShop/>
                    </div>
                    <div class="cell is-col-span-4">
                        <MiniaturaProduct/>
                    </div>
                    <div class="cell">Cell 3</div>
                </div>
            </div>
        </div>
    );
}