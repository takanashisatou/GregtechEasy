/// <reference path="./internal_*.d.ts" />
declare namespace it.unimi.dsi.fastutil {
    interface Stack <K> {
        peek(arg0: number): K;
        abstract pop(): K;
        abstract push(arg0: K): void;
        top(): K;
        abstract isEmpty(): boolean;
        get empty(): boolean
    }
    type Stack_<K> = Stack<K>;
}
declare namespace Internal {
    class FeaturePoolElement extends Internal.StructurePoolElement {
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        static readonly CODEC: Internal.Codec<Internal.FeaturePoolElement>;
    }
    type FeaturePoolElement_ = FeaturePoolElement;
    class TaskScreenConfiguratorItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(itemStack: Internal.ItemStack_, level: Internal.Level_, list: Internal.List_<net.minecraft.network.chat.Component>, tooltipFlag: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        static readBlockPos(stack: Internal.ItemStack_): Internal.Optional<Internal.GlobalPos>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(ctx: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(level: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static storeBlockPos(itemInHand: Internal.ItemStack_, level: Internal.Level_, clickedPos: BlockPos_): void;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type TaskScreenConfiguratorItem_ = TaskScreenConfiguratorItem;
    interface MouseListener extends Internal.EventListener {
        abstract mouseExited(arg0: Internal.MouseEvent_): void;
        abstract mouseReleased(arg0: Internal.MouseEvent_): void;
        abstract mousePressed(arg0: Internal.MouseEvent_): void;
        abstract mouseEntered(arg0: Internal.MouseEvent_): void;
        abstract mouseClicked(arg0: Internal.MouseEvent_): void;
    }
    type MouseListener_ = MouseListener;
    class ClientboundSetHealthPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getHealth(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getSaturation(): number;
        getFood(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get health(): number
        get skippable(): boolean
        get saturation(): number
        get food(): number
    }
    type ClientboundSetHealthPacket_ = ClientboundSetHealthPacket;
    class AttributeMap {
        constructor(arg0: Internal.AttributeSupplier_)
        getClass(): typeof any;
        "hasAttribute(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): boolean;
        removeAttributeModifiers(arg0: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>): void;
        getInstance(arg0: Internal.Holder_<Internal.Attribute>): Internal.AttributeInstance;
        hasModifier(arg0: Internal.Attribute_, arg1: Internal.UUID_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "hasAttribute(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): boolean;
        assignValues(arg0: Internal.AttributeMap_): void;
        "getModifierValue(net.minecraft.core.Holder,java.util.UUID)"(arg0: Internal.Holder_<Internal.Attribute>, arg1: Internal.UUID_): number;
        "getInstance(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): Internal.AttributeInstance;
        hasAttribute(arg0: Internal.Attribute_): boolean;
        getSyncableAttributes(): Internal.Collection<Internal.AttributeInstance>;
        save(): Internal.ListTag;
        getValue(arg0: Internal.Attribute_): number;
        hasAttribute(arg0: Internal.Holder_<Internal.Attribute>): boolean;
        "hasModifier(net.minecraft.core.Holder,java.util.UUID)"(arg0: Internal.Holder_<Internal.Attribute>, arg1: Internal.UUID_): boolean;
        toString(): string;
        load(arg0: Internal.ListTag_): void;
        getDirtyAttributes(): Internal.Set<Internal.AttributeInstance>;
        notifyAll(): void;
        getInstance(arg0: Internal.Attribute_): Internal.AttributeInstance;
        hasModifier(arg0: Internal.Holder_<Internal.Attribute>, arg1: Internal.UUID_): boolean;
        getBaseValue(arg0: Internal.Attribute_): number;
        hashCode(): number;
        "getInstance(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): Internal.AttributeInstance;
        wait(): void;
        wait(arg0: number): void;
        "getModifierValue(net.minecraft.world.entity.ai.attributes.Attribute,java.util.UUID)"(arg0: Internal.Attribute_, arg1: Internal.UUID_): number;
        addTransientAttributeModifiers(arg0: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>): void;
        getModifierValue(arg0: Internal.Holder_<Internal.Attribute>, arg1: Internal.UUID_): number;
        equals(arg0: any): boolean;
        "hasModifier(net.minecraft.world.entity.ai.attributes.Attribute,java.util.UUID)"(arg0: Internal.Attribute_, arg1: Internal.UUID_): boolean;
        getModifierValue(arg0: Internal.Attribute_, arg1: Internal.UUID_): number;
        get class(): typeof any
        get syncableAttributes(): Internal.Collection<Internal.AttributeInstance>
        get dirtyAttributes(): Internal.Set<Internal.AttributeInstance>
    }
    type AttributeMap_ = AttributeMap;
    class MekanismRecipeType <RECIPE extends Internal.MekanismRecipe, INPUT_CACHE extends Internal.IInputRecipeCache> implements Internal.RecipeType<RECIPE>, Internal.IMekanismRecipeTypeProvider<RECIPE, INPUT_CACHE> {
        getClass(): typeof any;
        static checkIncompleteRecipes(server: Internal.MinecraftServer_): boolean;
        static getRecipeFor<C extends net.minecraft.world.Container, RECIPE_TYPE extends Internal.Recipe<C>>(recipeType: Internal.RecipeType_<RECIPE_TYPE>, inventory: C, level: Internal.Level_): Internal.Optional<RECIPE_TYPE>;
        toString(): string;
        getRecipeType(): this;
        findFirst(world: Internal.Level_, matchCriteria: Internal.Predicate_<RECIPE>): RECIPE;
        notifyAll(): void;
        notify(): void;
        static byKey(level: Internal.Level_, id: ResourceLocation_): Internal.Optional<Internal.Recipe<any>>;
        wait(arg0: number, arg1: number): void;
        static checkIncompleteRecipes(recipeManager: Internal.RecipeManager_, registryAccess: Internal.RegistryAccess_): boolean;
        hashCode(): number;
        contains(world: Internal.Level_, matchCriteria: Internal.Predicate_<RECIPE>): boolean;
        stream(world: Internal.Level_): Internal.Stream<RECIPE>;
        wait(): void;
        getRegistryName(): ResourceLocation;
        wait(arg0: number): void;
        static clearCache(): void;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        getRecipes(world: Internal.Level_): Internal.List<RECIPE>;
        equals(arg0: any): boolean;
        getInputCache(): INPUT_CACHE;
        get class(): typeof any
        get recipeType(): Internal.MekanismRecipeType<RECIPE, INPUT_CACHE>
        get registryName(): ResourceLocation
        get inputCache(): INPUT_CACHE
        static readonly NUCLEOSYNTHESIZING: Internal.RecipeTypeRegistryObject<Internal.NucleosynthesizingRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Gas, Internal.GasStack, Internal.NucleosynthesizingRecipe>>;
        static readonly RECIPE_TYPES: (Internal.RecipeTypeDeferredRegister) & (Internal.RecipeTypeDeferredRegister);
        static readonly PIGMENT_EXTRACTING: Internal.RecipeTypeRegistryObject<Internal.ItemStackToPigmentRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToPigmentRecipe>>;
        static readonly REACTION: Internal.RecipeTypeRegistryObject<Internal.PressurizedReactionRecipe, Internal.InputRecipeCache$ItemFluidChemical<Internal.Gas, Internal.GasStack, Internal.PressurizedReactionRecipe>>;
        static readonly PURIFYING: Internal.RecipeTypeRegistryObject<Internal.ItemStackGasToItemStackRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Gas, Internal.GasStack, Internal.ItemStackGasToItemStackRecipe>>;
        static readonly CRUSHING: Internal.RecipeTypeRegistryObject<Internal.ItemStackToItemStackRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToItemStackRecipe>>;
        static readonly COMPRESSING: Internal.RecipeTypeRegistryObject<Internal.ItemStackGasToItemStackRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Gas, Internal.GasStack, Internal.ItemStackGasToItemStackRecipe>>;
        static readonly CHEMICAL_INFUSING: Internal.RecipeTypeRegistryObject<Internal.ChemicalInfuserRecipe, Internal.InputRecipeCache$EitherSideChemical<Internal.Gas, Internal.GasStack, Internal.ChemicalInfuserRecipe>>;
        static readonly ACTIVATING: Internal.RecipeTypeRegistryObject<Internal.GasToGasRecipe, Internal.InputRecipeCache$SingleChemical<Internal.Gas, Internal.GasStack, Internal.GasToGasRecipe>>;
        static readonly ENRICHING: Internal.RecipeTypeRegistryObject<Internal.ItemStackToItemStackRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToItemStackRecipe>>;
        static readonly SMELTING: Internal.RecipeTypeRegistryObject<Internal.ItemStackToItemStackRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToItemStackRecipe>>;
        static readonly SAWING: Internal.RecipeTypeRegistryObject<Internal.SawmillRecipe, Internal.InputRecipeCache$SingleItem<Internal.SawmillRecipe>>;
        static readonly COMBINING: Internal.RecipeTypeRegistryObject<Internal.CombinerRecipe, Internal.InputRecipeCache$DoubleItem<Internal.CombinerRecipe>>;
        static readonly ROTARY: Internal.RecipeTypeRegistryObject<Internal.RotaryRecipe, Internal.RotaryInputRecipeCache>;
        static readonly INFUSION_CONVERSION: Internal.RecipeTypeRegistryObject<Internal.ItemStackToInfuseTypeRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToInfuseTypeRecipe>>;
        static readonly INJECTING: Internal.RecipeTypeRegistryObject<Internal.ItemStackGasToItemStackRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Gas, Internal.GasStack, Internal.ItemStackGasToItemStackRecipe>>;
        static readonly METALLURGIC_INFUSING: Internal.RecipeTypeRegistryObject<Internal.MetallurgicInfuserRecipe, Internal.InputRecipeCache$ItemChemical<Internal.InfuseType, Internal.InfusionStack, Internal.MetallurgicInfuserRecipe>>;
        static readonly CENTRIFUGING: Internal.RecipeTypeRegistryObject<Internal.GasToGasRecipe, Internal.InputRecipeCache$SingleChemical<Internal.Gas, Internal.GasStack, Internal.GasToGasRecipe>>;
        static readonly PIGMENT_MIXING: Internal.RecipeTypeRegistryObject<Internal.PigmentMixingRecipe, Internal.InputRecipeCache$EitherSideChemical<Internal.Pigment, Internal.PigmentStack, Internal.PigmentMixingRecipe>>;
        static readonly WASHING: Internal.RecipeTypeRegistryObject<Internal.FluidSlurryToSlurryRecipe, Internal.InputRecipeCache$FluidChemical<Internal.Slurry, Internal.SlurryStack, Internal.FluidSlurryToSlurryRecipe>>;
        static readonly CRYSTALLIZING: Internal.RecipeTypeRegistryObject<Internal.ChemicalCrystallizerRecipe, Internal.ChemicalCrystallizerInputRecipeCache>;
        static readonly PAINTING: Internal.RecipeTypeRegistryObject<mekanism.api.recipes.PaintingRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Pigment, Internal.PigmentStack, mekanism.api.recipes.PaintingRecipe>>;
        static readonly ENERGY_CONVERSION: Internal.RecipeTypeRegistryObject<Internal.ItemStackToEnergyRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToEnergyRecipe>>;
        static readonly EVAPORATING: Internal.RecipeTypeRegistryObject<Internal.FluidToFluidRecipe, Internal.InputRecipeCache$SingleFluid<Internal.FluidToFluidRecipe>>;
        static readonly SEPARATING: Internal.RecipeTypeRegistryObject<Internal.ElectrolysisRecipe, Internal.InputRecipeCache$SingleFluid<Internal.ElectrolysisRecipe>>;
        static readonly DISSOLUTION: Internal.RecipeTypeRegistryObject<Internal.ChemicalDissolutionRecipe, Internal.InputRecipeCache$ItemChemical<Internal.Gas, Internal.GasStack, Internal.ChemicalDissolutionRecipe>>;
        static readonly OXIDIZING: Internal.RecipeTypeRegistryObject<Internal.ItemStackToGasRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToGasRecipe>>;
        static readonly GAS_CONVERSION: Internal.RecipeTypeRegistryObject<Internal.ItemStackToGasRecipe, Internal.InputRecipeCache$SingleItem<Internal.ItemStackToGasRecipe>>;
    }
    type MekanismRecipeType_<RECIPE extends Internal.MekanismRecipe, INPUT_CACHE extends Internal.IInputRecipeCache> = MekanismRecipeType<RECIPE, INPUT_CACHE>;
    class FilterType extends Internal.Enum<Internal.FilterType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        getDeclaringClass(): typeof Internal.FilterType;
        static valueOf(name: string): Internal.FilterType;
        toString(): string;
        compareTo(arg0: Internal.FilterType_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FilterType>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static values(): Internal.FilterType[];
        ordinal(): number;
        wait(): void;
        static byIndexStatic(index: number): Internal.FilterType;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(mekanism.common.content.filter.FilterType)"(arg0: Internal.FilterType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.FilterType
        static readonly QIO_MODID_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly QIO_TAG_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly SORTER_TAG_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly SORTER_ITEMSTACK_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly SORTER_MODID_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly MINER_TAG_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly QIO_ITEMSTACK_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly OREDICTIONIFICATOR_ITEM_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly MINER_ITEMSTACK_FILTER: (Internal.FilterType) & (Internal.FilterType);
        static readonly MINER_MODID_FILTER: (Internal.FilterType) & (Internal.FilterType);
    }
    type FilterType_ = "qio_tag_filter" | "miner_tag_filter" | "sorter_itemstack_filter" | FilterType | "oredictionificator_item_filter" | "sorter_modid_filter" | "miner_itemstack_filter" | "qio_itemstack_filter" | "sorter_tag_filter" | "miner_modid_filter" | "qio_modid_filter";
    abstract class HorizontalAlignment extends Internal.Enum<Internal.HorizontalAlignment> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(mezz.jei.api.gui.placement.HorizontalAlignment)"(arg0: Internal.HorizontalAlignment_): number;
        toString(): string;
        compareTo(arg0: Internal.HorizontalAlignment_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.HorizontalAlignment>>;
        static values(): Internal.HorizontalAlignment[];
        getDeclaringClass(): typeof Internal.HorizontalAlignment;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        abstract getXPos(arg0: number, arg1: number): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.HorizontalAlignment;
        get class(): typeof any
        get declaringClass(): typeof Internal.HorizontalAlignment
        static readonly CENTER: Internal.HorizontalAlignment;
        static readonly RIGHT: Internal.HorizontalAlignment;
        static readonly LEFT: Internal.HorizontalAlignment;
    }
    type HorizontalAlignment_ = "center" | "right" | HorizontalAlignment | "left";
    interface Predicate <T> {
        negate(): this;
        not<T>(arg0: Internal.Predicate_<T>): this;
        or(arg0: Internal.Predicate_<T>): this;
        abstract test(arg0: T): boolean;
        and(arg0: Internal.Predicate_<T>): this;
        isEqual<T>(arg0: any): this;
        (arg0: T): boolean;
    }
    type Predicate_<T> = Predicate<T> | ((arg0: T)=> boolean);
    interface MekanismContainerType$IMekanismSidedContainerFactory <T, CONTAINER extends Internal.AbstractContainerMenu> extends Internal.MekanismContainerType$IMekanismContainerFactory<T, CONTAINER> {
        create(id: number, inv: Internal.Inventory_, data: T): CONTAINER;
        abstract create(id: number, inv: Internal.Inventory_, data: T, remote: boolean): CONTAINER;
        (id: number, inv: Internal.Inventory, data: T, remote: boolean): CONTAINER;
    }
    type MekanismContainerType$IMekanismSidedContainerFactory_<T, CONTAINER extends Internal.AbstractContainerMenu> = MekanismContainerType$IMekanismSidedContainerFactory<T, CONTAINER> | ((id: number, inv: Internal.Inventory, data: T, remote: boolean)=> CONTAINER);
    class ExperienceRodItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isFireResistant(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ExperienceRodItem_ = ExperienceRodItem;
    class GTRecipeComponents$FluidIngredientJS extends Internal.Record implements Internal.OutputFluid, Internal.InputFluid {
        constructor(arg0: Internal.FluidStack_)
        constructor(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_)
        constructor(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number, arg2: Internal.CompoundTag_)
        constructor(ingredient: Internal.FluidIngredient_)
        replaceInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.InputReplacement_): any;
        getClass(): typeof any;
        "transform(dev.latvian.mods.kubejs.recipe.InputReplacementTransformer)"(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        toString(): string;
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        "transform(dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer)"(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        notifyAll(): void;
        static of(arg0: any): Internal.GTRecipeComponents$FluidIngredientJS;
        copy(arg0: number): Internal.FluidLike;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.OutputReplacement_): any;
        hashCode(): number;
        getAmount(): number;
        matches(arg0: Internal.FluidLike_): boolean;
        wait(): void;
        wait(arg0: number): void;
        ingredient(): Internal.FluidIngredient;
        transform(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
        get amount(): number
    }
    type GTRecipeComponents$FluidIngredientJS_ = GTRecipeComponents$FluidIngredientJS;
    abstract class Certificate implements Internal.Serializable {
        getClass(): typeof any;
        abstract toString(): string;
        abstract getPublicKey(): Internal.PublicKey;
        abstract "verify(java.security.PublicKey,java.lang.String)"(arg0: Internal.PublicKey_, arg1: string): void;
        notifyAll(): void;
        verify(arg0: Internal.PublicKey_, arg1: Internal.Provider_): void;
        abstract verify(arg0: Internal.PublicKey_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract verify(arg0: Internal.PublicKey_, arg1: string): void;
        wait(): void;
        getType(): string;
        wait(arg0: number): void;
        "verify(java.security.PublicKey,java.security.Provider)"(arg0: Internal.PublicKey_, arg1: Internal.Provider_): void;
        equals(arg0: any): boolean;
        abstract getEncoded(): number[];
        get class(): typeof any
        get publicKey(): Internal.PublicKey
        get type(): string
        get encoded(): number[]
    }
    type Certificate_ = Certificate;
    interface IPickupResponseUpgrade {
        abstract pickup(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        (arg0: Internal.Level, arg1: Internal.ItemStack, arg2: boolean): Internal.ItemStack_;
    }
    type IPickupResponseUpgrade_ = ((arg0: Internal.Level, arg1: Internal.ItemStack, arg2: boolean)=> Internal.ItemStack_) | IPickupResponseUpgrade;
    class WitherEnchantment extends Internal.EIOBaseEnchantment {
        constructor()
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        getCategory(): Internal.EnchantmentCategory;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        isAllowedOnBooks(): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get category(): Internal.EnchantmentCategory
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type WitherEnchantment_ = WitherEnchantment;
    abstract class AbstractReference2ObjectFunction <K, V> implements Internal.Reference2ObjectFunction<K, V>, Internal.Serializable {
        getClass(): typeof any;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Reference2DoubleFunction<K>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ObjectFunction<V>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ObjectFunction<V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Reference2FloatFunction<K>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Reference2LongFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Reference2ByteFunction<K>;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Reference2ReferenceFunction<K, T>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Reference2ShortFunction<K>;
        apply(arg0: K): V;
        toString(): string;
        notifyAll(): void;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Reference2CharFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ObjectFunction<V>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ObjectFunction<V>;
        hashCode(): number;
        size(): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Reference2ObjectFunction<K, T>;
        wait(): void;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Reference2IntFunction<K>;
        clear(): void;
        wait(arg0: number): void;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ObjectFunction<V>;
        defaultReturnValue(): V;
        equals(arg0: any): boolean;
        static identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        get class(): typeof any
    }
    type AbstractReference2ObjectFunction_<K, V> = AbstractReference2ObjectFunction<K, V>;
    class StackUpgradeItem$Wrapper extends Internal.UpgradeWrapperBase<Internal.StackUpgradeItem$Wrapper, Internal.StackUpgradeItem> {
        getClass(): typeof any;
        getStackSizeMultiplier(): number;
        toString(): string;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        get stackSizeMultiplier(): number
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get enabled(): boolean
        get cooldownTime(): number
    }
    type StackUpgradeItem$Wrapper_ = StackUpgradeItem$Wrapper;
    class CocoaBlock extends Internal.HorizontalDirectionalBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (2) & (number);
    }
    type CocoaBlock_ = CocoaBlock;
    class TransitionValues {
        constructor(view: icyllis.modernui.view.View_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly view: icyllis.modernui.view.View;
        readonly values: Internal.Map<string, any>;
    }
    type TransitionValues_ = TransitionValues;
    class PitcherCropBlock extends Internal.DoublePlantBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        static preventCreativeDropFromBottomPart(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static copyWaterloggedFrom(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static placeAt(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (4) & (number);
    }
    type PitcherCropBlock_ = PitcherCropBlock;
    class FunctionToolCall {
        constructor(arg0: string, arg1: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getName(): string;
        notifyAll(): void;
        wait(arg0: number): void;
        getArguments(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get name(): string
        get "arguments"(): string
        static CODEC: Internal.Codec<Internal.FunctionToolCall>;
    }
    type FunctionToolCall_ = FunctionToolCall;
    interface ProviderType <T extends Internal.RegistrateProvider> {
        registerDelegate<T extends Internal.RegistrateProvider>(arg0: string, arg1: Internal.NonNullUnaryOperator_<Internal.ProviderType<T>>): this;
        register<T extends Internal.RegistrateProvider>(arg0: string, arg1: Internal.ProviderType_<T>): this;
        "register(java.lang.String,com.tterrag.registrate.util.nullness.NonNullFunction)"<T extends Internal.RegistrateProvider>(arg0: string, arg1: com.tterrag.registrate.util.nullness.NonNullFunction_<Internal.ProviderType<T>, Internal.NonNullBiFunction<Internal.AbstractRegistrate<any>, Internal.GatherDataEvent, T>>): this;
        register<T extends Internal.RegistrateProvider>(arg0: string, arg1: com.tterrag.registrate.util.nullness.NonNullFunction_<Internal.ProviderType<T>, Internal.NonNullBiFunction<Internal.AbstractRegistrate<any>, Internal.GatherDataEvent, T>>): this;
        "register(java.lang.String,com.tterrag.registrate.util.nullness.NonNullBiFunction)"<T extends Internal.RegistrateProvider>(arg0: string, arg1: Internal.NonNullBiFunction_<Internal.AbstractRegistrate<any>, Internal.GatherDataEvent, T>): this;
        register<T extends Internal.RegistrateProvider>(arg0: string, arg1: Internal.NonNullBiFunction_<Internal.AbstractRegistrate<any>, Internal.GatherDataEvent, T>): this;
        "register(java.lang.String,com.tterrag.registrate.providers.ProviderType)"<T extends Internal.RegistrateProvider>(arg0: string, arg1: Internal.ProviderType_<T>): this;
        abstract create(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.GatherDataEvent_, arg2: Internal.Map_<Internal.ProviderType<any>, Internal.RegistrateProvider>): T;
        (arg0: Internal.AbstractRegistrate<any>, arg1: Internal.GatherDataEvent, arg2: Internal.Map<Internal.ProviderType<any>, Internal.RegistrateProvider>): T;
        readonly FLUID_TAGS: Internal.ProviderType<Internal.RegistrateTagsProvider$IntrinsicImpl<Internal.Fluid>>;
        readonly LANG: Internal.ProviderType<Internal.RegistrateLangProvider>;
        readonly ADVANCEMENT: Internal.ProviderType<Internal.RegistrateAdvancementProvider>;
        readonly RECIPE: Internal.ProviderType<Internal.RegistrateRecipeProvider>;
        readonly GENERIC_SERVER: Internal.ProviderType<Internal.RegistrateGenericProvider>;
        readonly GENERIC_CLIENT: Internal.ProviderType<Internal.RegistrateGenericProvider>;
        readonly BLOCK_TAGS: Internal.ProviderType<Internal.RegistrateTagsProvider$IntrinsicImpl<Internal.Block>>;
        readonly ENTITY_TAGS: Internal.ProviderType<Internal.RegistrateTagsProvider$IntrinsicImpl<Internal.EntityType<any>>>;
        readonly ITEM_MODEL: Internal.ProviderType<Internal.RegistrateItemModelProvider>;
        readonly BLOCKSTATE: Internal.ProviderType<Internal.RegistrateBlockstateProvider>;
        readonly LOOT: Internal.ProviderType<any>;
        readonly ITEM_TAGS: Internal.ProviderType<Internal.RegistrateItemTagsProvider>;
    }
    type ProviderType_<T extends Internal.RegistrateProvider> = ProviderType<T> | ((arg0: Internal.AbstractRegistrate<any>, arg1: Internal.GatherDataEvent, arg2: Internal.Map<Internal.ProviderType<any>, Internal.RegistrateProvider>)=> T);
    interface IStorageBlock {
        abstract setTicking(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBaseStackSizeMultiplier(): number;
        abstract getNumberOfInventorySlots(): number;
        abstract getNumberOfUpgradeSlots(): number;
        get baseStackSizeMultiplier(): number
        get numberOfInventorySlots(): number
        get numberOfUpgradeSlots(): number
    }
    type IStorageBlock_ = IStorageBlock;
    interface ImageProducer {
        abstract removeConsumer(arg0: Internal.ImageConsumer_): void;
        abstract startProduction(arg0: Internal.ImageConsumer_): void;
        abstract requestTopDownLeftRightResend(arg0: Internal.ImageConsumer_): void;
        abstract addConsumer(arg0: Internal.ImageConsumer_): void;
        abstract isConsumer(arg0: Internal.ImageConsumer_): boolean;
    }
    type ImageProducer_ = ImageProducer;
    class PickaxeItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        static toToolTier(o: any): Internal.Tier;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
        */
        subtypes(fn: Internal.Function_<Internal.ItemStack, Internal.Collection<Internal.ItemStack>>): Internal.ItemBuilder;
        createAdditionalObjects(): void;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
        */
        hurtEnemy(context: Internal.Predicate_<Internal.ItemBuilder$HurtEnemyContext>): Internal.ItemBuilder;
        getTranslationKeyGroup(): string;
        notify(): void;
        get(): Internal.Item;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
        */
        unstackable(): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
        */
        color(index: number, color: Internal.ItemTintFunction_): Internal.ItemBuilder;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
        */
        finishUsing(finishUsing: Internal.ItemBuilder$FinishUsingCallback_): Internal.ItemBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Modifies the tool tier.
        */
        modifyTier(callback: Internal.Consumer_<Internal.MutableToolTier>): Internal.HandheldItemBuilder;
        /**
         * Adds an attribute modifier to the item.
         * 
         * An attribute modifier is something like a damage boost or a speed boost.
         * On tools, they're applied when the item is held, on armor, they're
         * applied when the item is worn.
         * @param attribute The resource location of the attribute, e.g. 'generic.attack_damage'
         * @param identifier A unique identifier for the modifier. Modifiers are considered the same if they have the same identifier.
         * @param d The amount of the modifier.
         * @param operation The operation to apply the modifier with. Can be ADDITION, MULTIPLY_BASE, or MULTIPLY_TOTAL.
        */
        modifyAttribute(attribute: ResourceLocation_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): Internal.ItemBuilder;
        /**
         * Sets the item's model (parent).
        */
        parentModel(m: string): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
        */
        color(callback: Internal.ItemTintFunction_): Internal.ItemBuilder;
        /**
         * Sets the item's max stack size. Default is 64.
        */
        maxStackSize(v: number): Internal.ItemBuilder;
        /**
         * Adds a tooltip to the item.
        */
        tooltip(text: net.minecraft.network.chat.Component_): Internal.ItemBuilder;
        "transformObject(net.minecraft.world.item.Item)"(obj: Internal.Item_): Internal.Item;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
        */
        barWidth(barWidth: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the base attack speed of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
         * 
         * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
        */
        speedBaseline(f: number): Internal.HandheldItemBuilder;
        /**
         * Sets the item's rarity.
        */
        rarity(v: Internal.Rarity_): Internal.ItemBuilder;
        /**
         * Makes the item fire resistant like netherite tools.
        */
        fireResistant(): Internal.ItemBuilder;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Determines the animation of the item when used, e.g. eating food.
        */
        useAnimation(animation: Internal.UseAnim_): Internal.ItemBuilder;
        tier(t: Internal.Tier_): Internal.HandheldItemBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
        */
        use(use: Internal.ItemBuilder$UseCallback_): Internal.ItemBuilder;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
        */
        releaseUsing(releaseUsing: Internal.ItemBuilder$ReleaseUsingCallback_): Internal.ItemBuilder;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
        */
        containerItem(id: ResourceLocation_): Internal.ItemBuilder;
        wait(): void;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
        */
        burnTime(v: number): Internal.ItemBuilder;
        /**
         * Directlys set the item's texture json.
        */
        textureJson(json: Internal.JsonObject_): Internal.ItemBuilder;
        static toArmorMaterial(o: any): Internal.ArmorMaterial;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
        */
        useDuration(useDuration: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        /**
         * Sets the attack speed of the tool.
        */
        speed(f: number): Internal.HandheldItemBuilder;
        getClass(): typeof any;
        /**
         * Makes the item fire resistant like netherite tools (or not).
        */
        fireResistant(isFireResistant: boolean): Internal.ItemBuilder;
        /**
         * Sets the item's texture by given key.
        */
        texture(key: string, tex: string): Internal.ItemBuilder;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
        */
        maxDamage(v: number): Internal.ItemBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        /**
         * Sets the item's name dynamically.
        */
        name(name: Internal.ItemBuilder$NameCallback_): Internal.ItemBuilder;
        createItemProperties(): Internal.Item$Properties;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        createObject(): Internal.Item;
        /**
         * Sets the base attack damage of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
         * 
         * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
        */
        attackDamageBaseline(f: number): Internal.HandheldItemBuilder;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
        */
        glow(v: boolean): Internal.ItemBuilder;
        transformObject(arg0: any): any;
        /**
         * Directly set the item's model json.
        */
        modelJson(json: Internal.JsonObject_): Internal.ItemBuilder;
        toString(): string;
        /**
         * Set the food properties of the item.
        */
        food(b: Internal.Consumer_<Internal.FoodBuilder>): Internal.ItemBuilder;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.Item>;
        hashCode(): number;
        /**
         * Sets the item's texture (layer0).
        */
        texture(tex: string): Internal.ItemBuilder;
        transformObject(obj: Internal.Item_): Internal.Item;
        wait(arg0: number): void;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
        */
        barColor(barColor: Internal.Function_<Internal.ItemStack, dev.latvian.mods.rhino.mod.util.color.Color>): Internal.ItemBuilder;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the attack damage bonus of the tool.
        */
        attackDamageBonus(f: number): Internal.HandheldItemBuilder;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        /**
         * @deprecated
        */
        group(g: string): Internal.ItemBuilder;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
    }
    type PickaxeItemBuilder_ = PickaxeItemBuilder;
    class TickEvent$Type extends Internal.Enum<Internal.TickEvent$Type> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TickEvent$Type>>;
        "compareTo(net.minecraftforge.event.TickEvent$Type)"(arg0: Internal.TickEvent$Type_): number;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.TickEvent$Type[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(arg0: string): Internal.TickEvent$Type;
        hashCode(): number;
        compareTo(arg0: Internal.TickEvent$Type_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.TickEvent$Type;
        get class(): typeof any
        get declaringClass(): typeof Internal.TickEvent$Type
        static readonly RENDER: (Internal.TickEvent$Type) & (Internal.TickEvent$Type);
        static readonly LEVEL: (Internal.TickEvent$Type) & (Internal.TickEvent$Type);
        static readonly CLIENT: (Internal.TickEvent$Type) & (Internal.TickEvent$Type);
        static readonly SERVER: (Internal.TickEvent$Type) & (Internal.TickEvent$Type);
        static readonly PLAYER: (Internal.TickEvent$Type) & (Internal.TickEvent$Type);
    }
    type TickEvent$Type_ = "player" | "level" | "server" | "client" | TickEvent$Type | "render";
    /**
     * Invoked when the server is first loaded.
    */
    class RegisterCapesEventJS extends Internal.EventJS {
        constructor(arg0: Internal.RegisterGTCapesEvent_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        /**
         * Registers a cape.
         * @param id An identifier for the cape
         * @param texture The full path to the cape's texture in a resource pack
        */
        registerCape(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        /**
         * Automatically makes a cape available to a player.
         * @param owner The UUID of the player to give the cape to.
         * @param capeId The cape to give
        */
        unlockCapeFor(arg0: Internal.UUID_, arg1: ResourceLocation_): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Registers a cape that will always be unlocked for all players.
         * @param id An identifier for the cape
         * @param texture The full path to the cape's texture in a resource pack
        */
        registerFreeCape(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type RegisterCapesEventJS_ = RegisterCapesEventJS;
    interface WorldGenLevel extends Internal.ServerLevelAccessor {
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        abstract getSeed(): number;
        dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        "scheduleTick(net.minecraft.core.BlockPos,net.minecraft.world.level.material.Fluid,int,net.minecraft.world.ticks.TickPriority)"(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        getMaxSection(): number;
        abstract getLevelData(): Internal.LevelData;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        "getNearestPlayer(net.minecraft.world.entity.ai.targeting.TargetingConditions,net.minecraft.world.entity.LivingEntity,double,double,double)"(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        abstract players(): Internal.List<Internal.Player>;
        abstract getBiomeManager(): Internal.BiomeManager;
        abstract getRandom(): Internal.RandomSource;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
        playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        blockUpdated(arg0: BlockPos_, arg1: Internal.Block_): void;
        abstract setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        abstract isClientSide(): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        abstract getBlockTicks(): Internal.LevelTickAccess<Internal.Block>;
        "getNearestPlayer(net.minecraft.world.entity.ai.targeting.TargetingConditions,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        "scheduleTick(net.minecraft.core.BlockPos,net.minecraft.world.level.material.Fluid,int)"(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        abstract "getEntities(net.minecraft.world.level.entity.EntityTypeTest,net.minecraft.world.phys.AABB,java.util.function.Predicate)"<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        abstract destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        abstract getFluidTicks(): Internal.LevelTickAccess<Internal.Fluid>;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        ensureCanWrite(arg0: BlockPos_): boolean;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        "getNearestPlayer(double,double,double,double,java.util.function.Predicate)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getHeight(): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract getWorldBorder(): Internal.WorldBorder;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        "scheduleTick(net.minecraft.core.BlockPos,net.minecraft.world.level.block.Block,int,net.minecraft.world.ticks.TickPriority)"(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        "gameEvent(net.minecraft.world.level.gameevent.GameEvent,net.minecraft.core.BlockPos,net.minecraft.world.level.gameevent.GameEvent$Context)"(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        "getNearestPlayer(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): Internal.Player;
        "noCollision(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): boolean;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        "gameEvent(net.minecraft.world.entity.Entity,net.minecraft.world.level.gameevent.GameEvent,net.minecraft.core.BlockPos)"(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        abstract gameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_, arg2: Internal.GameEvent$Context_): void;
        abstract "getEntities(net.minecraft.world.entity.Entity,net.minecraft.world.phys.AABB,java.util.function.Predicate)"(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        neighborShapeChanged(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        abstract playSound(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_, arg4: number, arg5: number): void;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        "gameEvent(net.minecraft.world.entity.Entity,net.minecraft.world.level.gameevent.GameEvent,net.minecraft.world.phys.Vec3)"(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        abstract addParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        abstract getCurrentDifficultyAt(arg0: BlockPos_): Internal.DifficultyInstance;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        addFreshEntityWithPassengers(arg0: Internal.Entity_): void;
        abstract getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        "noCollision(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        abstract getServer(): Internal.MinecraftServer;
        abstract levelEvent(arg0: Internal.Player_, arg1: number, arg2: BlockPos_, arg3: number): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        abstract getLevel(): Internal.ServerLevel;
        abstract getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getBestNeighborSignal(arg0: BlockPos_): number;
        hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        "getNearestPlayer(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        abstract getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        setCurrentlyGenerating(arg0: Internal.Supplier_<string>): void;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract "gameEvent(net.minecraft.world.level.gameevent.GameEvent,net.minecraft.world.phys.Vec3,net.minecraft.world.level.gameevent.GameEvent$Context)"(arg0: Internal.GameEvent_, arg1: Vec3d_, arg2: Internal.GameEvent$Context_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunkSource(): Internal.ChunkSource;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        "scheduleTick(net.minecraft.core.BlockPos,net.minecraft.world.level.block.Block,int)"(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract nextSubTickCount(): number;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get seed(): number
        get maxSection(): number
        get levelData(): Internal.LevelData
        get biomeManager(): Internal.BiomeManager
        get random(): Internal.RandomSource
        get clientSide(): boolean
        get blockTicks(): Internal.LevelTickAccess<Internal.Block>
        get skyDarken(): number
        get minBuildHeight(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get fluidTicks(): Internal.LevelTickAccess<Internal.Fluid>
        get maxBuildHeight(): number
        get height(): number
        get worldBorder(): Internal.WorldBorder
        get minSection(): number
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get server(): Internal.MinecraftServer
        get level(): Internal.ServerLevel
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        set currentlyGenerating(arg0: Internal.Supplier_<string>)
        get modelDataManager(): Internal.ModelDataManager
        get chunkSource(): Internal.ChunkSource
        get maxLightLevel(): number
    }
    type WorldGenLevel_ = WorldGenLevel;
    class CarverDebugSettings {
        static of(arg0: boolean, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.BlockState_): Internal.CarverDebugSettings;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static of(arg0: boolean, arg1: Internal.BlockState_): Internal.CarverDebugSettings;
        getLavaState(): Internal.BlockState;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAirState(): Internal.BlockState;
        hashCode(): number;
        getBarrierState(): Internal.BlockState;
        getWaterState(): Internal.BlockState;
        wait(): void;
        wait(arg0: number): void;
        static of(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): Internal.CarverDebugSettings;
        equals(arg0: any): boolean;
        isDebugMode(): boolean;
        get class(): typeof any
        get lavaState(): Internal.BlockState
        get airState(): Internal.BlockState
        get barrierState(): Internal.BlockState
        get waterState(): Internal.BlockState
        get debugMode(): boolean
        static readonly DEFAULT: (Internal.CarverDebugSettings) & (Internal.CarverDebugSettings);
        static readonly CODEC: Internal.Codec<Internal.CarverDebugSettings>;
    }
    type CarverDebugSettings_ = CarverDebugSettings;
    abstract class ByteBuf implements Internal.ByteBufConvertible, Internal.Comparable<Internal.ByteBuf>, Internal.ReferenceCounted {
        constructor()
        abstract indexOf(arg0: number, arg1: number, arg2: number): number;
        abstract getBytes(arg0: number, arg1: Internal.OutputStream_, arg2: number): this;
        abstract readShortLE(): number;
        abstract writeInt(arg0: number): this;
        abstract readDouble(): number;
        abstract skipBytes(arg0: number): this;
        abstract markReaderIndex(): this;
        abstract markWriterIndex(): this;
        abstract getShortLE(arg0: number): number;
        abstract "writeBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): this;
        abstract isReadable(arg0: number): boolean;
        abstract resetWriterIndex(): this;
        abstract getBytes(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        abstract readUnsignedMedium(): number;
        abstract writeBytes(arg0: Internal.InputStream_, arg1: number): number;
        abstract compareTo(arg0: Internal.ByteBuf_): number;
        abstract readUnsignedMediumLE(): number;
        touch(arg0: any): Internal.ReferenceCounted;
        abstract writeIntLE(arg0: number): this;
        abstract setMediumLE(arg0: number, arg1: number): this;
        abstract slice(): this;
        abstract writeMedium(arg0: number): this;
        abstract copy(arg0: number, arg1: number): this;
        abstract resetReaderIndex(): this;
        abstract release(): boolean;
        abstract readBytes(arg0: number[]): this;
        abstract readByte(): number;
        getClass(): typeof any;
        abstract writerIndex(arg0: number): this;
        isContiguous(): boolean;
        abstract arrayOffset(): number;
        abstract readBytes(arg0: Internal.ByteBuffer_): this;
        abstract retainedSlice(arg0: number, arg1: number): this;
        abstract nioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        abstract getUnsignedInt(arg0: number): number;
        abstract getUnsignedMedium(arg0: number): number;
        abstract getUnsignedMediumLE(arg0: number): number;
        abstract maxCapacity(): number;
        abstract clear(): this;
        abstract getCharSequence(arg0: number, arg1: number, arg2: Internal.Charset_): Internal.CharSequence;
        abstract readMedium(): number;
        abstract unwrap(): this;
        retain(): Internal.ReferenceCounted;
        abstract writeBytes(arg0: number[]): this;
        wait(arg0: number): void;
        abstract "writeBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): this;
        abstract "compareTo(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): number;
        abstract discardReadBytes(): this;
        abstract writeChar(arg0: number): this;
        abstract duplicate(): this;
        abstract getDouble(arg0: number): number;
        abstract capacity(arg0: number): this;
        abstract isDirect(): boolean;
        abstract readUnsignedInt(): number;
        abstract writeDouble(arg0: number): this;
        abstract getUnsignedIntLE(arg0: number): number;
        abstract "getBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract readChar(): string;
        abstract setInt(arg0: number, arg1: number): this;
        abstract bytesBefore(arg0: number, arg1: number, arg2: number): number;
        abstract "readBytes(java.nio.channels.GatheringByteChannel,int)"(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        asByteBuf(): this;
        abstract isWritable(arg0: number): boolean;
        abstract alloc(): Internal.ByteBufAllocator;
        abstract "writeBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): this;
        abstract readInt(): number;
        abstract nioBuffers(arg0: number, arg1: number): Internal.ByteBuffer[];
        abstract setChar(arg0: number, arg1: number): this;
        abstract "getBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        abstract writeBytes(arg0: Internal.ByteBuffer_): this;
        abstract getLong(arg0: number): number;
        wait(): void;
        abstract readerIndex(arg0: number): this;
        abstract "setBytes(int,java.nio.channels.ScatteringByteChannel,int)"(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        abstract "readBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        writeDoubleLE(arg0: number): this;
        abstract getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract "setBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): this;
        abstract hasMemoryAddress(): boolean;
        abstract asReadOnly(): this;
        abstract setZero(arg0: number, arg1: number): this;
        abstract readLongLE(): number;
        abstract getShort(arg0: number): number;
        abstract writeLong(arg0: number): this;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        abstract readBytes(arg0: Internal.ByteBuf_): this;
        abstract readUnsignedIntLE(): number;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuffer_): this;
        abstract getInt(arg0: number): number;
        abstract getBytes(arg0: number, arg1: number[]): this;
        abstract writeBytes(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        abstract "setBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        abstract setMedium(arg0: number, arg1: number): this;
        abstract writeByte(arg0: number): this;
        abstract "readBytes(java.io.OutputStream,int)"(arg0: Internal.OutputStream_, arg1: number): this;
        abstract readBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        abstract ensureWritable(arg0: number, arg1: boolean): number;
        abstract "readBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): this;
        abstract getBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        abstract setDouble(arg0: number, arg1: number): this;
        abstract getUnsignedShort(arg0: number): number;
        abstract readUnsignedByte(): number;
        abstract "getBytes(int,byte[])"(arg0: number, arg1: number[]): this;
        abstract "getBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        abstract getUnsignedShortLE(arg0: number): number;
        abstract "writeBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        abstract equals(arg0: any): boolean;
        abstract toString(arg0: number, arg1: number, arg2: Internal.Charset_): string;
        abstract readableBytes(): number;
        abstract "setBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        abstract "setBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        maxFastWritableBytes(): number;
        abstract forEachByteDesc(arg0: Internal.ByteProcessor_): number;
        abstract nioBufferCount(): number;
        abstract nioBuffers(): Internal.ByteBuffer[];
        abstract writeBytes(arg0: number[], arg1: number, arg2: number): this;
        abstract getFloat(arg0: number): number;
        abstract writeFloat(arg0: number): this;
        abstract setBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        abstract "setBytes(int,byte[])"(arg0: number, arg1: number[]): this;
        abstract setFloat(arg0: number, arg1: number): this;
        abstract memoryAddress(): number;
        abstract forEachByte(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        abstract ensureWritable(arg0: number): this;
        abstract getMediumLE(arg0: number): number;
        abstract maxWritableBytes(): number;
        abstract isReadable(): boolean;
        abstract readIntLE(): number;
        abstract getByte(arg0: number): number;
        abstract writeShort(arg0: number): this;
        abstract bytesBefore(arg0: number, arg1: number): number;
        abstract getMedium(arg0: number): number;
        abstract "writeBytes(java.io.InputStream,int)"(arg0: Internal.InputStream_, arg1: number): number;
        retain(arg0: number): Internal.ReferenceCounted;
        abstract readBoolean(): boolean;
        abstract setCharSequence(arg0: number, arg1: Internal.CharSequence_, arg2: Internal.Charset_): number;
        abstract isReadOnly(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        setDoubleLE(arg0: number, arg1: number): this;
        abstract writeLongLE(arg0: number): this;
        abstract writeCharSequence(arg0: Internal.CharSequence_, arg1: Internal.Charset_): number;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuf_): this;
        abstract readUnsignedShort(): number;
        abstract forEachByteDesc(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        abstract writeMediumLE(arg0: number): this;
        abstract release(arg0: number): boolean;
        abstract writeBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        abstract forEachByte(arg0: Internal.ByteProcessor_): number;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuf_): this;
        abstract setLongLE(arg0: number, arg1: number): this;
        abstract writeBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        abstract getUnsignedByte(arg0: number): number;
        abstract "readBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        abstract "readBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): this;
        abstract readBytes(arg0: Internal.ByteBuf_, arg1: number): this;
        abstract readBytes(arg0: number[], arg1: number, arg2: number): this;
        abstract retainedSlice(): this;
        abstract setShort(arg0: number, arg1: number): this;
        abstract "readBytes(byte[])"(arg0: number[]): this;
        abstract toString(): string;
        abstract "writeBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        readDoubleLE(): number;
        abstract getBoolean(arg0: number): boolean;
        notifyAll(): void;
        abstract "readBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        abstract writeZero(arg0: number): this;
        abstract "writeBytes(java.nio.channels.ScatteringByteChannel,int)"(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        abstract nioBuffer(): Internal.ByteBuffer;
        abstract readBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        abstract readUnsignedShortLE(): number;
        abstract internalNioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        abstract setBytes(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        getFloatLE(arg0: number): number;
        abstract isWritable(): boolean;
        abstract readerIndex(): number;
        abstract "readBytes(int)"(arg0: number): this;
        abstract setByte(arg0: number, arg1: number): this;
        abstract readBytes(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        abstract writerIndex(): number;
        abstract retainedDuplicate(): this;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        abstract "readBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): this;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        notify(): void;
        abstract "writeBytes(byte[])"(arg0: number[]): this;
        compareTo(arg0: any): number;
        abstract setShortLE(arg0: number, arg1: number): this;
        setFloatLE(arg0: number, arg1: number): this;
        abstract setLong(arg0: number, arg1: number): this;
        abstract readMediumLE(): number;
        /**
         * @deprecated
        */
        abstract order(): Internal.ByteOrder;
        writeFloatLE(arg0: number): this;
        abstract writableBytes(): number;
        abstract getChar(arg0: number): string;
        abstract writeBytes(arg0: Internal.ByteBuf_, arg1: number): this;
        abstract "writeBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        abstract "getBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        abstract discardSomeReadBytes(): this;
        abstract bytesBefore(arg0: number): number;
        abstract "getBytes(int,java.io.OutputStream,int)"(arg0: number, arg1: Internal.OutputStream_, arg2: number): this;
        abstract readRetainedSlice(arg0: number): this;
        abstract setBytes(arg0: number, arg1: number[]): this;
        abstract "setBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        readFloatLE(): number;
        abstract array(): number[];
        abstract writeShortLE(arg0: number): this;
        abstract readShort(): number;
        abstract getIntLE(arg0: number): number;
        abstract readBytes(arg0: Internal.OutputStream_, arg1: number): this;
        abstract slice(arg0: number, arg1: number): this;
        abstract capacity(): number;
        abstract setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract readCharSequence(arg0: number, arg1: Internal.Charset_): Internal.CharSequence;
        abstract "getBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): this;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        abstract getLongLE(arg0: number): number;
        abstract readSlice(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        abstract "getBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        abstract "setBytes(int,java.io.InputStream,int)"(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        abstract readFloat(): number;
        getDoubleLE(arg0: number): number;
        abstract writeBoolean(arg0: boolean): this;
        abstract setIndex(arg0: number, arg1: number): this;
        abstract hasArray(): boolean;
        abstract setBoolean(arg0: number, arg1: boolean): this;
        abstract writeBytes(arg0: Internal.ByteBuf_): this;
        abstract setBytes(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        abstract readLong(): number;
        abstract copy(): this;
        touch(): Internal.ReferenceCounted;
        abstract "getBytes(int,java.nio.channels.GatheringByteChannel,int)"(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        abstract readBytes(arg0: number): this;
        abstract refCnt(): number;
        abstract setIntLE(arg0: number, arg1: number): this;
        abstract "setBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        abstract hashCode(): number;
        abstract toString(arg0: Internal.Charset_): string;
        /**
         * @deprecated
        */
        abstract order(arg0: Internal.ByteOrder_): this;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuffer_): this;
        get class(): typeof any
        get contiguous(): boolean
        get direct(): boolean
        get readable(): boolean
        get readOnly(): boolean
        get writable(): boolean
    }
    type ByteBuf_ = ByteBuf;
    interface MenuItem$OnActionExpandListener {
        abstract onMenuItemActionExpand(arg0: icyllis.modernui.view.MenuItem_): boolean;
        abstract onMenuItemActionCollapse(arg0: icyllis.modernui.view.MenuItem_): boolean;
    }
    type MenuItem$OnActionExpandListener_ = MenuItem$OnActionExpandListener;
    class PaintingVariant {
        constructor(arg0: number, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getWidth(): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getHeight(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get width(): number
        get height(): number
    }
    type PaintingVariant_ = PaintingVariant | Special.PaintingVariant;
    interface ArtifactRepository {
        abstract setLayout(arg0: Internal.ArtifactRepositoryLayout_): void;
        abstract getBasedir(): string;
        abstract getKey(): string;
        abstract setBlocked(arg0: boolean): void;
        abstract isBlocked(): boolean;
        abstract getLayout(): Internal.ArtifactRepositoryLayout;
        abstract setReleaseUpdatePolicy(arg0: Internal.ArtifactRepositoryPolicy_): void;
        abstract setProxy(arg0: org.apache.maven.repository.Proxy_): void;
        abstract setAuthentication(arg0: Internal.Authentication_): void;
        abstract setMirroredRepositories(arg0: Internal.List_<Internal.ArtifactRepository>): void;
        abstract pathOfLocalRepositoryMetadata(arg0: Internal.ArtifactMetadata_, arg1: Internal.ArtifactRepository_): string;
        /**
         * @deprecated
        */
        abstract setBlacklisted(arg0: boolean): void;
        abstract getMirroredRepositories(): Internal.List<Internal.ArtifactRepository>;
        abstract getProxy(): org.apache.maven.repository.Proxy;
        abstract setSnapshotUpdatePolicy(arg0: Internal.ArtifactRepositoryPolicy_): void;
        abstract setId(arg0: string): void;
        abstract getAuthentication(): Internal.Authentication;
        abstract find(arg0: Internal.Artifact_): Internal.Artifact;
        abstract findVersions(arg0: Internal.Artifact_): Internal.List<string>;
        abstract getId(): string;
        /**
         * @deprecated
        */
        abstract isBlacklisted(): boolean;
        /**
         * @deprecated
        */
        abstract isUniqueVersion(): boolean;
        abstract getSnapshots(): Internal.ArtifactRepositoryPolicy;
        abstract setUrl(arg0: string): void;
        abstract getProtocol(): string;
        abstract pathOfRemoteRepositoryMetadata(arg0: Internal.ArtifactMetadata_): string;
        abstract isProjectAware(): boolean;
        abstract pathOf(arg0: Internal.Artifact_): string;
        abstract getUrl(): string;
        abstract getReleases(): Internal.ArtifactRepositoryPolicy;
        set layout(arg0: Internal.ArtifactRepositoryLayout_)
        get basedir(): string
        get key(): string
        set blocked(arg0: boolean)
        get blocked(): boolean
        get layout(): Internal.ArtifactRepositoryLayout
        set releaseUpdatePolicy(arg0: Internal.ArtifactRepositoryPolicy_)
        set proxy(arg0: org.apache.maven.repository.Proxy_)
        set authentication(arg0: Internal.Authentication_)
        set mirroredRepositories(arg0: Internal.List_<Internal.ArtifactRepository>)
        /**
         * @deprecated
        */
        set blacklisted(arg0: boolean)
        get mirroredRepositories(): Internal.List<Internal.ArtifactRepository>
        get proxy(): org.apache.maven.repository.Proxy
        set snapshotUpdatePolicy(arg0: Internal.ArtifactRepositoryPolicy_)
        set id(arg0: string)
        get authentication(): Internal.Authentication
        get id(): string
        /**
         * @deprecated
        */
        get blacklisted(): boolean
        /**
         * @deprecated
        */
        get uniqueVersion(): boolean
        get snapshots(): Internal.ArtifactRepositoryPolicy
        set url(arg0: string)
        get protocol(): string
        get projectAware(): boolean
        get url(): string
        get releases(): Internal.ArtifactRepositoryPolicy
    }
    type ArtifactRepository_ = ArtifactRepository;
    class JobAttributes$SidesType extends Internal.AttributeValue {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly ONE_SIDED: (Internal.JobAttributes$SidesType) & (Internal.JobAttributes$SidesType);
        static readonly TWO_SIDED_SHORT_EDGE: (Internal.JobAttributes$SidesType) & (Internal.JobAttributes$SidesType);
        static readonly TWO_SIDED_LONG_EDGE: (Internal.JobAttributes$SidesType) & (Internal.JobAttributes$SidesType);
    }
    type JobAttributes$SidesType_ = JobAttributes$SidesType;
    abstract class PatrollingMonster extends Internal.Monster {
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        canJoinPatrol(): boolean;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getPatrolTarget(): BlockPos;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setPatrolLeader(arg0: boolean): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        canBeLeader(): boolean;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tlmIsJumping(): boolean;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setRotation(yaw: number, pitch: number): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        handler$znh000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        findPatrolTarget(): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        setPatrolTarget(arg0: BlockPos_): void;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        static checkPatrollingMonsterSpawnRules(arg0: Internal.EntityType_<Internal.PatrollingMonster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        hasPatrolTarget(): boolean;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        setTimeout(): void;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        getFrictionInfluencedSpeed(arg0: number): number;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        handleOnClimbable(arg0: Vec3d_): Vec3d;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        isPatrolLeader(): boolean;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        tlmCanAddPassenger(arg0: Internal.Entity_): boolean;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get patrolTarget(): BlockPos
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        set patrolLeader(arg0: boolean)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        set patrolTarget(arg0: BlockPos_)
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get patrolLeader(): boolean
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type PatrollingMonster_ = PatrollingMonster;
    abstract class CustomizeGuiOverlayEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        toString(): string;
        getWindow(): com.mojang.blaze3d.platform.Window;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        get window(): com.mojang.blaze3d.platform.Window
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type CustomizeGuiOverlayEvent_ = CustomizeGuiOverlayEvent;
    class ChestType extends Internal.Enum<Internal.ChestType> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.ChestType_): number;
        getSerializedName(): string;
        static values(): Internal.ChestType[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf(arg0: string): Internal.ChestType;
        getDeclaringClass(): typeof Internal.ChestType;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChestType>>;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        "compareTo(net.minecraft.world.level.block.state.properties.ChestType)"(arg0: Internal.ChestType_): number;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        getOpposite(): this;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.ChestType
        get opposite(): Internal.ChestType
        static readonly SINGLE: (Internal.ChestType) & (Internal.ChestType);
        static readonly LEFT: (Internal.ChestType) & (Internal.ChestType);
        static readonly RIGHT: (Internal.ChestType) & (Internal.ChestType);
    }
    type ChestType_ = "single" | ChestType | "right" | "left";
    class StonecutterUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.StonecutterUpgradeWrapper, Internal.StonecutterUpgradeItem> {
        getClass(): typeof any;
        setShiftClickIntoStorage(arg0: boolean): void;
        toString(): string;
        getRecipeId(): Internal.Optional<ResourceLocation>;
        getInputInventory(): Internal.IItemHandlerModifiable;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        setRecipeId(arg0: ResourceLocation_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        shouldShiftClickIntoStorage(): boolean;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        set shiftClickIntoStorage(arg0: boolean)
        get recipeId(): Internal.Optional<ResourceLocation>
        get inputInventory(): Internal.IItemHandlerModifiable
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        set recipeId(arg0: ResourceLocation_)
        get enabled(): boolean
        get cooldownTime(): number
    }
    type StonecutterUpgradeWrapper_ = StonecutterUpgradeWrapper;
    class Wolf extends Internal.TamableAnimal implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.Wolf>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        abstract setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getOwner(): Internal.LivingEntity;
        getPositionCodec(): Internal.VecDeltaCodec;
        isWet(): boolean;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        getLeashOffset(): Vec3d;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        setOrderedToSit(arg0: boolean): void;
        getCollarColor(): Internal.DyeColor;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        getHeadRollAngle(arg0: number): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        tame(arg0: Internal.Player_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        setInSittingPose(arg0: boolean): void;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        setOwnerUUID(arg0: Internal.UUID_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getWetShade(arg0: number): number;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isInterested(): boolean;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        setTame(arg0: boolean): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tlmIsJumping(): boolean;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        abstract setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        isAngry(): boolean;
        setRotation(yaw: number, pitch: number): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        handler$znh000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setIsInterested(arg0: boolean): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        setRemainingPersistentAngerTime(arg0: number): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        setCollarColor(arg0: Internal.DyeColor_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getTailAngle(): number;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        static checkWolfSpawnRules(arg0: Internal.EntityType_<Internal.Wolf>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        playerDied(arg0: Internal.Player_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isTame(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        isOrderedToSit(): boolean;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        setTimeout(): void;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        getFrictionInfluencedSpeed(arg0: number): number;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        abstract getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        getOwnerUUID(): Internal.UUID;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        startPersistentAngerTimer(): void;
        getBodyRollAngle(arg0: number, arg1: number): number;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        resetLove(): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        handleOnClimbable(arg0: Vec3d_): Vec3d;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        wantsToAttack(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        isInSittingPose(): boolean;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        stopBeingAngry(): void;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getPersistentAngerTarget(): Internal.UUID;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        tlmCanAddPassenger(arg0: Internal.Entity_): boolean;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        isOwnedBy(arg0: Internal.LivingEntity_): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get owner(): Internal.LivingEntity
        get positionCodec(): Internal.VecDeltaCodec
        get wet(): boolean
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        set orderedToSit(arg0: boolean)
        get collarColor(): Internal.DyeColor
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get remainingPersistentAngerTime(): number
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inSittingPose(arg0: boolean)
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        set ownerUUID(arg0: Internal.UUID_)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get interested(): boolean
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        set tame(arg0: boolean)
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        get angry(): boolean
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set isInterested(arg0: boolean)
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set remainingPersistentAngerTime(arg0: number)
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set collarColor(arg0: Internal.DyeColor_)
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get tailAngle(): number
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get tame(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get orderedToSit(): boolean
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get ownerUUID(): Internal.UUID
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get inSittingPose(): boolean
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get persistentAngerTarget(): Internal.UUID
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set persistentAngerTarget(arg0: Internal.UUID_)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly PREY_SELECTOR: Internal.Predicate<Internal.LivingEntity>;
    }
    type Wolf_ = Wolf;
    class AttachedData <T> extends Internal.HashMap<string, any> {
        constructor(p: T)
        computeIfAbsent(arg0: string, arg1: Internal.Function_<string, any>): any;
        containsValue(arg0: any): boolean;
        add(key: string, data: any): void;
        notify(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<string, any, any>): void;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        compute(arg0: string, arg1: Internal.BiFunction_<string, any, any>): any;
        putIfAbsent(arg0: string, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        wait(): void;
        remove(arg0: any): any;
        putAll(arg0: Internal.Map_<string, any>): void;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        clone(): any;
        replace(arg0: string, arg1: any): any;
        getClass(): typeof any;
        keySet(): Internal.Set<string>;
        forEach(arg0: Internal.BiConsumer_<string, any>): void;
        getOrDefault(arg0: any, arg1: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<string, any>>;
        isEmpty(): boolean;
        merge(arg0: string, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        computeIfPresent(arg0: string, arg1: Internal.BiFunction_<string, any, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        toString(): string;
        notifyAll(): void;
        static newHashMap<K, V>(arg0: number): Internal.HashMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        replace(arg0: string, arg1: any, arg2: any): boolean;
        put(arg0: string, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        abstract hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        getParent(): T;
        clear(): void;
        wait(arg0: number): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        get(arg0: any): any;
        get class(): typeof any
        get empty(): boolean
        get parent(): T
    }
    type AttachedData_<T> = AttachedData<T>;
    class EndCrystal extends Internal.Entity {
        constructor(arg0: Internal.EntityType_<Internal.EndCrystal>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        setCulled(value: boolean): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        setOutOfCamera(value: boolean): void;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isCulled(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        setBeamTarget(arg0: BlockPos_): void;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setShowBottom(arg0: boolean): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        setTimeout(): void;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        showsBottom(): boolean;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getBlockStateOn(): Internal.BlockState;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        setExtension(key: any, value: any): void;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBeamTarget(): BlockPos;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        tlmCanAddPassenger(arg0: Internal.Entity_): boolean;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        isForcedVisible(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set culled(value: boolean)
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        set outOfCamera(value: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get culled(): boolean
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        set beamTarget(arg0: BlockPos_)
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set showBottom(arg0: boolean)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get outOfCamera(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get beamTarget(): BlockPos
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get forcedVisible(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        time: number;
    }
    type EndCrystal_ = EndCrystal;
    interface ExternalArrayData {
        abstract getArrayElement(arg0: number): any;
        abstract getArrayLength(): number;
        abstract setArrayElement(arg0: number, arg1: any): void;
        get arrayLength(): number
    }
    type ExternalArrayData_ = ExternalArrayData;
    class CraftGuideStepData {
        constructor(arg0: studio.fantasyit.maid_storage_manager.storage.Target_, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.List_<Internal.ItemStack>, arg3: ResourceLocation_, arg4: boolean, arg5: Internal.CompoundTag_)
        toCompound(): Internal.CompoundTag;
        getClass(): typeof any;
        isOptional(): boolean;
        getExtraData(): Internal.CompoundTag;
        setInput(arg0: number, arg1: Internal.ItemStack_): void;
        getOutput(): Internal.List<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getNonEmptyItems(): Internal.List<Internal.ItemStack>;
        getItems(): Internal.List<Internal.ItemStack>;
        static createFromTypeStorage(arg0: studio.fantasyit.maid_storage_manager.storage.Target_, arg1: ResourceLocation_): Internal.CraftGuideStepData;
        setAction(arg0: ResourceLocation_): void;
        getStorage(): studio.fantasyit.maid_storage_manager.storage.Target;
        toString(): string;
        getInput(): Internal.List<Internal.ItemStack>;
        getNonEmptyInput(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        static fromCompound(arg0: Internal.CompoundTag_): Internal.CraftGuideStepData;
        getActionType(): ResourceLocation;
        hashCode(): number;
        getNonEmptyOutput(): Internal.List<Internal.ItemStack>;
        wait(): void;
        wait(arg0: number): void;
        clearOutput(): void;
        equals(arg0: any): boolean;
        setOutput(arg0: number, arg1: Internal.ItemStack_): void;
        setExtraData(arg0: Internal.CompoundTag_): void;
        clearInput(): void;
        get class(): typeof any
        get optional(): boolean
        get extraData(): Internal.CompoundTag
        get output(): Internal.List<Internal.ItemStack>
        get nonEmptyItems(): Internal.List<Internal.ItemStack>
        get items(): Internal.List<Internal.ItemStack>
        set action(arg0: ResourceLocation_)
        get storage(): studio.fantasyit.maid_storage_manager.storage.Target
        get input(): Internal.List<Internal.ItemStack>
        get nonEmptyInput(): Internal.List<Internal.ItemStack>
        get actionType(): ResourceLocation
        get nonEmptyOutput(): Internal.List<Internal.ItemStack>
        set extraData(arg0: Internal.CompoundTag_)
        input: Internal.List<Internal.ItemStack>;
        optional: boolean;
        actionType: Internal.CraftAction;
        action: ResourceLocation;
        output: Internal.List<Internal.ItemStack>;
        static readonly SPECIAL_ACTION: (ResourceLocation) & (ResourceLocation);
        static CODEC: Internal.Codec<Internal.CraftGuideStepData>;
        storage: studio.fantasyit.maid_storage_manager.storage.Target;
        extraData: Internal.CompoundTag;
    }
    type CraftGuideStepData_ = CraftGuideStepData;
    class ParticleStatus extends Internal.Enum<Internal.ParticleStatus> implements Internal.OptionEnum {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ParticleStatus>>;
        getClass(): typeof any;
        static values(): Internal.ParticleStatus[];
        getKey(): string;
        toString(): string;
        static byId(arg0: number): Internal.ParticleStatus;
        "compareTo(net.minecraft.client.ParticleStatus)"(arg0: Internal.ParticleStatus_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getCaption(): net.minecraft.network.chat.Component;
        compareTo(arg0: Internal.ParticleStatus_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.ParticleStatus;
        static valueOf(arg0: string): Internal.ParticleStatus;
        getId(): number;
        get class(): typeof any
        get key(): string
        get caption(): net.minecraft.network.chat.Component
        get declaringClass(): typeof Internal.ParticleStatus
        get id(): number
        static readonly ALL: (Internal.ParticleStatus) & (Internal.ParticleStatus);
        static readonly DECREASED: (Internal.ParticleStatus) & (Internal.ParticleStatus);
        static readonly MINIMAL: (Internal.ParticleStatus) & (Internal.ParticleStatus);
    }
    type ParticleStatus_ = ParticleStatus | "minimal" | "decreased" | "all";
    class CraftingUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.CraftingUpgradeWrapper, Internal.CraftingUpgradeItem> {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        setShiftClickIntoStorage(arg0: boolean): void;
        toString(): string;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        getInventory(): Internal.ItemStackHandler;
        canBeDisabled(): boolean;
        hashCode(): number;
        shouldShiftClickIntoStorage(): boolean;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        set shiftClickIntoStorage(arg0: boolean)
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get enabled(): boolean
        get cooldownTime(): number
        get inventory(): Internal.ItemStackHandler
    }
    type CraftingUpgradeWrapper_ = CraftingUpgradeWrapper;
    interface IGeometryLoader <T extends Internal.IUnbakedGeometry<T>> {
        abstract read(arg0: Internal.JsonObject_, arg1: Internal.JsonDeserializationContext_): T;
        (arg0: Internal.JsonObject, arg1: Internal.JsonDeserializationContext): T;
    }
    type IGeometryLoader_<T extends Internal.IUnbakedGeometry<T>> = ((arg0: Internal.JsonObject, arg1: Internal.JsonDeserializationContext)=> T) | IGeometryLoader<T>;
    class RenderHighlightEvent$Block extends Internal.RenderHighlightEvent {
        constructor()
        constructor(arg0: Internal.LevelRenderer_, arg1: Internal.Camera_, arg2: Internal.BlockHitResult_, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getPartialTick(): number;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        getCamera(): Internal.Camera;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevelRenderer(): Internal.LevelRenderer;
        getTarget(): Internal.HitResult;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getMultiBufferSource(): Internal.MultiBufferSource;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get partialTick(): number
        set phase(arg0: Internal.EventPriority_)
        get camera(): Internal.Camera
        get canceled(): boolean
        get levelRenderer(): Internal.LevelRenderer
        get target(): Internal.HitResult
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderHighlightEvent$Block_ = RenderHighlightEvent$Block;
    class ChargerBlock extends Internal.AEBaseEntityBlock<Internal.ChargerBlockEntity> {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static fixtureProps(): Internal.BlockBehaviour$Properties;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getOrientationStrategy(): Internal.IOrientationStrategy;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.ChargerBlockEntity;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        onActivated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static metalProps(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ChargerBlockEntity>;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChargerBlockEntity;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static stoneProps(): Internal.BlockBehaviour$Properties;
        static glassProps(): Internal.BlockBehaviour$Properties;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        setBlockEntity(arg0: typeof Internal.ChargerBlockEntity, arg1: Internal.BlockEntityType_<Internal.ChargerBlockEntity>, arg2: Internal.BlockEntityTicker_<Internal.ChargerBlockEntity>, arg3: Internal.BlockEntityTicker_<Internal.ChargerBlockEntity>): void;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRegistryName(): ResourceLocation;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get orientationStrategy(): Internal.IOrientationStrategy
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        get blockEntityType(): Internal.BlockEntityType<Internal.ChargerBlockEntity>
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type ChargerBlock_ = ChargerBlock;
    class Passthrough implements Internal.RuleBlockEntityModifier {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getType(): Internal.RuleBlockEntityModifierType<any>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(arg0: Internal.RandomSource_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        get class(): typeof any
        get type(): Internal.RuleBlockEntityModifierType<any>
        static readonly INSTANCE: (Internal.Passthrough) & (Internal.Passthrough);
        static readonly CODEC: Internal.Codec<Internal.Passthrough>;
    }
    type Passthrough_ = Passthrough;
    abstract class ItemStackToItemStackRecipe extends Internal.MekanismRecipe implements Internal.Predicate<Internal.ItemStack> {
        constructor(arg0: ResourceLocation_, arg1: Internal.ItemStackIngredient_, arg2: Internal.ItemStack_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getInput(): Internal.ItemStackIngredient;
        "test(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        test(arg0: any): boolean;
        getId(): ResourceLocation;
        getOutput(arg0: Internal.ItemStack_): Internal.ItemStack;
        negate(): Internal.Predicate<Internal.ItemStack>;
        isSpecial(): boolean;
        write(arg0: Internal.FriendlyByteBuf_): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        "assemble(mekanism.api.inventory.IgnoredIInventory,net.minecraft.core.RegistryAccess)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getType(): ResourceLocation;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        test(arg0: Internal.ItemStack_): boolean;
        isIncomplete(): boolean;
        getClass(): typeof any;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        "test(java.lang.Object)"(arg0: any): boolean;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        logMissingTags(): void;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getOutputDefinition(): Internal.List<Internal.ItemStack>;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        assemble(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getRemainingItems(arg0: Internal.IgnoredIInventory_): Internal.NonNullList<Internal.ItemStack>;
        equals(arg0: any): boolean;
        "matches(mekanism.api.inventory.IgnoredIInventory,net.minecraft.world.level.Level)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        matches(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get input(): Internal.ItemStackIngredient
        get id(): ResourceLocation
        get special(): boolean
        get type(): ResourceLocation
        get incomplete(): boolean
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get outputDefinition(): Internal.List<Internal.ItemStack>
        set group(group: string)
        get orCreateId(): ResourceLocation
    }
    type ItemStackToItemStackRecipe_ = ItemStackToItemStackRecipe;
    interface Animation$LoopType {
        fromString(arg0: string): this;
        fromJson(arg0: Internal.JsonElement_): this;
        register(arg0: string, arg1: Internal.Animation$LoopType_): this;
        abstract shouldPlayAgain(arg0: Internal.GeoAnimatable_, arg1: software.bernie.geckolib.core.animation.AnimationController_<Internal.GeoAnimatable>, arg2: software.bernie.geckolib.core.animation.Animation_): boolean;
        (arg0: Internal.GeoAnimatable, arg1: software.bernie.geckolib.core.animation.AnimationController<Internal.GeoAnimatable>, arg2: software.bernie.geckolib.core.animation.Animation): boolean;
        readonly PLAY_ONCE: Internal.Animation$LoopType;
        readonly DEFAULT: Internal.Animation$LoopType;
        readonly LOOP_TYPES: ({"false": any, "true": any, "play_once": any, "hold_on_last_frame": any, "loop": any}) & (Internal.Map<string, Internal.Animation$LoopType>);
        readonly LOOP: Internal.Animation$LoopType;
        readonly HOLD_ON_LAST_FRAME: Internal.Animation$LoopType;
    }
    type Animation$LoopType_ = Animation$LoopType | ((arg0: Internal.GeoAnimatable, arg1: software.bernie.geckolib.core.animation.AnimationController<Internal.GeoAnimatable>, arg2: software.bernie.geckolib.core.animation.Animation)=> boolean);
    class UniqueID {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type UniqueID_ = UniqueID;
    class Monitor {
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        getX(): number;
        getY(): number;
        getPreferredVidMode(arg0: Internal.Optional_<Internal.VideoMode>): Internal.VideoMode;
        notifyAll(): void;
        getCurrentMode(): Internal.VideoMode;
        getMonitor(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getModeCount(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getMode(arg0: number): Internal.VideoMode;
        refreshVideoModes(): void;
        equals(arg0: any): boolean;
        getVideoModeIndex(arg0: Internal.VideoMode_): number;
        get class(): typeof any
        get x(): number
        get y(): number
        get currentMode(): Internal.VideoMode
        get monitor(): number
        get modeCount(): number
    }
    type Monitor_ = Monitor;
    interface FireworkRocketEntityKJS {
        abstract setLifetimeKJS(arg0: number): void;
        set lifetimeKJS(arg0: number)
        (arg0: number): void;
    }
    type FireworkRocketEntityKJS_ = ((arg0: number)=> void) | FireworkRocketEntityKJS;
    class ConfigInfo {
        constructor(facingSupplier: Internal.Supplier_<Internal.Direction>)
        getClass(): typeof any;
        getSlotInfo(dataType: Internal.DataType_): Internal.ISlotInfo;
        notify(): void;
        getSides(predicate: Internal.Predicate_<Internal.DataType>): Internal.Set<Internal.Direction>;
        wait(arg0: number, arg1: number): void;
        incrementDataType(relativeSide: mekanism.api.RelativeSide_): Internal.DataType;
        getDataTypeForContainer(container: any): Internal.List<Internal.DataType>;
        setDefaults(): void;
        getSidesForData(dataType: Internal.DataType_): Internal.Set<Internal.Direction>;
        isSideEnabled(side: mekanism.api.RelativeSide_): boolean;
        getSlotInfo(side: mekanism.api.RelativeSide_): Internal.ISlotInfo;
        setDataType(dataType: Internal.DataType_, ...sides: mekanism.api.RelativeSide_[]): void;
        "getSlotInfo(mekanism.common.tile.component.config.DataType)"(dataType: Internal.DataType_): Internal.ISlotInfo;
        getSupportedDataTypes(): Internal.Set<Internal.DataType>;
        "getSlotInfo(mekanism.api.RelativeSide)"(side: mekanism.api.RelativeSide_): Internal.ISlotInfo;
        setCanEject(canEject: boolean): void;
        isEjecting(): boolean;
        toString(): string;
        notifyAll(): void;
        getDataType(side: mekanism.api.RelativeSide_): Internal.DataType;
        getSidesForOutput(outputType: Internal.DataType_): Internal.Set<Internal.Direction>;
        setEjecting(ejecting: boolean): void;
        addSlotInfo(dataType: Internal.DataType_, info: Internal.ISlotInfo_): void;
        hashCode(): number;
        getAllOutputtingSides(): Internal.Set<Internal.Direction>;
        wait(): void;
        wait(arg0: number): void;
        canEject(): boolean;
        equals(arg0: any): boolean;
        fill(dataType: Internal.DataType_): void;
        addDisabledSides(...sides: mekanism.api.RelativeSide_[]): void;
        decrementDataType(relativeSide: mekanism.api.RelativeSide_): Internal.DataType;
        get class(): typeof any
        get supportedDataTypes(): Internal.Set<Internal.DataType>
        set canEject(canEject: boolean)
        get ejecting(): boolean
        set ejecting(ejecting: boolean)
        get allOutputtingSides(): Internal.Set<Internal.Direction>
    }
    type ConfigInfo_ = ConfigInfo;
    abstract class DatagramChannel extends Internal.AbstractSelectableChannel implements Internal.ScatteringByteChannel, Internal.ByteChannel, Internal.GatheringByteChannel, Internal.MulticastChannel {
        getClass(): typeof any;
        blockingLock(): any;
        abstract getLocalAddress(): Internal.SocketAddress;
        register(arg0: Internal.Selector_, arg1: number, arg2: any): Internal.SelectionKey;
        isBlocking(): boolean;
        abstract join(arg0: Internal.InetAddress_, arg1: Internal.NetworkInterface_, arg2: Internal.InetAddress_): Internal.MembershipKey;
        keyFor(arg0: Internal.Selector_): Internal.SelectionKey;
        provider(): Internal.SelectorProvider;
        validOps(): number;
        notify(): void;
        read(arg0: Internal.ByteBuffer_[]): number;
        wait(arg0: number, arg1: number): void;
        static open(arg0: Internal.ProtocolFamily_): Internal.DatagramChannel;
        abstract read(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract write(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract isOpen(): boolean;
        configureBlocking(arg0: boolean): Internal.SelectableChannel;
        abstract join(arg0: Internal.InetAddress_, arg1: Internal.NetworkInterface_): Internal.MembershipKey;
        abstract isConnected(): boolean;
        write(arg0: Internal.ByteBuffer_[]): number;
        abstract socket(): Internal.DatagramSocket;
        abstract receive(arg0: Internal.ByteBuffer_): Internal.SocketAddress;
        static open(): Internal.DatagramChannel;
        abstract write(arg0: Internal.ByteBuffer_): number;
        register(arg0: Internal.Selector_, arg1: number): Internal.SelectionKey;
        abstract read(arg0: Internal.ByteBuffer_): number;
        setOption(arg0: Internal.SocketOption_<any>, arg1: any): Internal.NetworkChannel;
        toString(): string;
        abstract "read(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        notifyAll(): void;
        isRegistered(): boolean;
        abstract connect(arg0: Internal.SocketAddress_): this;
        abstract getRemoteAddress(): Internal.SocketAddress;
        hashCode(): number;
        "read(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        abstract disconnect(): this;
        abstract "write(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        wait(): void;
        abstract close(): void;
        wait(arg0: number): void;
        bind(arg0: Internal.SocketAddress_): Internal.NetworkChannel;
        abstract send(arg0: Internal.ByteBuffer_, arg1: Internal.SocketAddress_): number;
        abstract supportedOptions(): Internal.Set<Internal.SocketOption<any>>;
        abstract getOption<T>(arg0: Internal.SocketOption_<T>): T;
        equals(arg0: any): boolean;
        "write(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        get class(): typeof any
        get localAddress(): Internal.SocketAddress
        get blocking(): boolean
        get open(): boolean
        get connected(): boolean
        get registered(): boolean
        get remoteAddress(): Internal.SocketAddress
    }
    type DatagramChannel_ = DatagramChannel;
    interface StackedContentsCompatible {
        abstract fillStackedContents(arg0: Internal.StackedContents_): void;
        (arg0: Internal.StackedContents): void;
    }
    type StackedContentsCompatible_ = StackedContentsCompatible | ((arg0: Internal.StackedContents)=> void);
    class ResizableOreFeatureConfig extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(targetStates: Internal.List_<Internal.OreConfiguration$TargetBlockState>, oreVeinType: Internal.OreType$OreVeinType_, size: Internal.IntSupplier_, discardChanceOnAirExposure: Internal.FloatSupplier_)
        getClass(): typeof any;
        targetStates(): Internal.List<Internal.OreConfiguration$TargetBlockState>;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        notifyAll(): void;
        discardChanceOnAirExposure(): Internal.FloatSupplier;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        oreVeinType(): Internal.OreType$OreVeinType;
        wait(arg0: number): void;
        size(): Internal.IntSupplier;
        equals(o: any): boolean;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.ResizableOreFeatureConfig>;
    }
    type ResizableOreFeatureConfig_ = ResizableOreFeatureConfig;
    class SortableFilterManager <FILTER extends Internal.IFilter<any>> extends Internal.FilterManager<FILTER> {
        constructor(filterClass: FILTER, markForSave: Internal.Runnable_)
        hasEnabledFilters(): boolean;
        getClass(): typeof any;
        moveDown(filterIndex: number): void;
        count(): number;
        moveToTop(filterIndex: number): void;
        addFilter(filter: FILTER): boolean;
        moveToBottom(filterIndex: number): void;
        writeToNBT(nbt: Internal.CompoundTag_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        toggleState(index: number): void;
        getEnabledFilters(): Internal.List<FILTER>;
        tryEditFilter<F extends Internal.IFilter<F>>(currentFilter: F, newFilter: F): void;
        moveUp(filterIndex: number): void;
        readFromNBT(nbt: Internal.CompoundTag_): void;
        toString(): string;
        getFilters(): Internal.List<FILTER>;
        notifyAll(): void;
        anyEnabledMatch(validator: Internal.Predicate_<FILTER>): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        tryAddFilter(toAdd: Internal.IFilter_<any>, save: boolean): void;
        equals(arg0: any): boolean;
        removeFilter(filter: FILTER): boolean;
        addContainerTrackers(container: Internal.MekanismContainer_): void;
        get class(): typeof any
        get enabledFilters(): Internal.List<FILTER>
        get filters(): Internal.List<FILTER>
    }
    type SortableFilterManager_<FILTER extends Internal.IFilter<any>> = SortableFilterManager<FILTER>;
    interface PresetEditor {
        abstract createEditScreen(arg0: Internal.CreateWorldScreen_, arg1: Internal.WorldCreationContext_): Internal.Screen;
        (arg0: Internal.CreateWorldScreen, arg1: Internal.WorldCreationContext): Internal.Screen_;
        /**
         * @deprecated
        */
        readonly EDITORS: ({[key: Internal.Optional<any>]: any, [key: Internal.Optional<any>]: any}) & (Internal.Map<Internal.Optional<Internal.ResourceKey<Internal.WorldPreset>>, Internal.PresetEditor>);
    }
    type PresetEditor_ = PresetEditor | ((arg0: Internal.CreateWorldScreen, arg1: Internal.WorldCreationContext)=> Internal.Screen_);
    class PlaceOnWaterBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type PlaceOnWaterBlockItem_ = PlaceOnWaterBlockItem;
    class PrefixExpression extends icyllis.arc3d.compiler.tree.Expression {
        constructor(position: number, op: Internal.Operator_, operand: icyllis.arc3d.compiler.tree.Expression_)
        getClass(): typeof any;
        getCoercionCost(other: icyllis.arc3d.compiler.tree.Type_): number;
        getEndOffset(): number;
        getConstantValue(i: number): Internal.OptionalDouble;
        notify(): void;
        getOperand(): icyllis.arc3d.compiler.tree.Expression;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        clone(): icyllis.arc3d.compiler.tree.Expression;
        isIncomplete(context: icyllis.arc3d.compiler.Context_): boolean;
        static convert(context: icyllis.arc3d.compiler.Context_, position: number, op: Internal.Operator_, base: icyllis.arc3d.compiler.tree.Expression_): icyllis.arc3d.compiler.tree.Expression;
        isLiteral(): boolean;
        clone(position: number): icyllis.arc3d.compiler.tree.Expression;
        static make(context: icyllis.arc3d.compiler.Context_, position: number, op: Internal.Operator_, base: icyllis.arc3d.compiler.tree.Expression_): icyllis.arc3d.compiler.tree.Expression;
        getOperator(): Internal.Operator;
        toString(): string;
        isConstructorCall(): boolean;
        notifyAll(): void;
        accept(visitor: Internal.TreeVisitor_): boolean;
        getKind(): Internal.Node$ExpressionKind;
        isFloatLiteral(): boolean;
        getType(): icyllis.arc3d.compiler.tree.Type;
        hashCode(): number;
        wait(): void;
        toString(parentPrecedence: number): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isIntLiteral(): boolean;
        isBooleanLiteral(): boolean;
        get class(): typeof any
        get endOffset(): number
        get operand(): icyllis.arc3d.compiler.tree.Expression
        get startOffset(): number
        get literal(): boolean
        get operator(): Internal.Operator
        get constructorCall(): boolean
        get kind(): Internal.Node$ExpressionKind
        get floatLiteral(): boolean
        get type(): icyllis.arc3d.compiler.tree.Type
        get intLiteral(): boolean
        get booleanLiteral(): boolean
    }
    type PrefixExpression_ = PrefixExpression;
    interface IOffsetCapability {
        abstract getOffsetCapabilityIfEnabled<T>(capability: Internal.Capability_<T>, side: Internal.Direction_, offset: Vec3i_): Internal.LazyOptional<T>;
        getOffsetCapability<T>(capability: Internal.Capability_<T>, side: Internal.Direction_, offset: Vec3i_): Internal.LazyOptional<T>;
        isOffsetCapabilityDisabled(capability: Internal.Capability_<any>, side: Internal.Direction_, offset: Vec3i_): boolean;
        (capability: Internal.Capability<T>, side: Internal.Direction, offset: Vec3i): Internal.LazyOptional_<T>;
    }
    type IOffsetCapability_ = ((capability: Internal.Capability<T>, side: Internal.Direction, offset: Vec3i)=> Internal.LazyOptional_<T>) | IOffsetCapability;
    class ExperienceShardItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ExperienceShardItem_ = ExperienceShardItem;
    class GTBucketItem extends Internal.BucketItem {
        constructor(arg0: Internal.Supplier_<Internal.Fluid>, arg1: Internal.Item$Properties_, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material_, arg3: string)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static getEmptySuccessItem(arg0: Internal.ItemStack_, arg1: Internal.Player_): Internal.ItemStack;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        getFluid(): Internal.Fluid;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        checkExtraContent(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: BlockPos_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        arch$getFluid(): Internal.Fluid;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static color(arg0: Internal.ItemStack_, arg1: number): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get fluid(): Internal.Fluid
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type GTBucketItem_ = GTBucketItem;
    class Editor$HistoryItem extends Internal.Record {
        constructor(name: string, date: Internal.CompoundTag_, source: any)
        name(): string;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        date(): Internal.CompoundTag;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        source(): any;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Editor$HistoryItem_ = Editor$HistoryItem;
    interface Reference2IntFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        removeInt(arg0: any): number;
        defaultReturnValue(): number;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Reference2ByteFunction<K>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2IntFunction<T>;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Reference2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2IntFunction;
        abstract getInt(arg0: any): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Reference2LongFunction<K>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2IntFunction;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2IntFunction;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2IntFunction;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2IntFunction<T>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Reference2CharFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        identity<T>(): Internal.Function<T, T>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Reference2FloatFunction<K>;
        (arg0: any): number;
    }
    type Reference2IntFunction_<K> = ((arg0: any)=> number) | Reference2IntFunction<K>;
    interface UnmodifiableConfig$Entry {
        getChar(): string;
        getShortOrElse(arg0: number): number;
        getByte(): number;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getInt(): number;
        getCharOrElse(arg0: string): string;
        get "char"(): string
        get "byte"(): number
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type UnmodifiableConfig$Entry_ = UnmodifiableConfig$Entry;
    /**
     * Invoked when a player sends a chat message.
     * 
     * If cancelled (`PlayerEvents.chat`), the message will not be sent.
    */
    class PlayerChatDecorateEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.ServerPlayer_, chatComponent: Internal.ChatEvent$ChatComponent_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        /**
         * Gets the message that the player sent.
        */
        getMessage(): string;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getPlayer(): Internal.Player;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        /**
         * Gets the username of the player that sent the message.
        */
        getUsername(): string;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        /**
         * Gets the message that the player sent.
        */
        getComponent(): net.minecraft.network.chat.Component;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        /**
         * Gets the player that sent the message.
        */
        getEntity(): Internal.Entity;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Sets the message that the player sent.
        */
        setMessage(text: net.minecraft.network.chat.Component_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getServer(): Internal.MinecraftServer;
        /**
         * Sets the message that the player sent.
        */
        setComponent(text: net.minecraft.network.chat.Component_): void;
        get class(): typeof any
        /**
         * Gets the message that the player sent.
        */
        get message(): string
        get level(): Internal.Level
        get player(): Internal.Player
        /**
         * Gets the username of the player that sent the message.
        */
        get username(): string
        /**
         * Gets the message that the player sent.
        */
        get component(): net.minecraft.network.chat.Component
        /**
         * Gets the player that sent the message.
        */
        get entity(): Internal.Entity
        /**
         * Sets the message that the player sent.
        */
        set message(text: net.minecraft.network.chat.Component_)
        get server(): Internal.MinecraftServer
        /**
         * Sets the message that the player sent.
        */
        set component(text: net.minecraft.network.chat.Component_)
        chatComponent: Internal.ChatEvent$ChatComponent;
    }
    type PlayerChatDecorateEventJS_ = PlayerChatDecorateEventJS;
    class FTBQuestsKubeJSTeamDataWrapper extends Internal.FTBQuestsKubeJSTeamData {
        constructor(d: Internal.TeamData_)
        complete(id: any): void;
        canStartQuest(id: any): boolean;
        getClass(): typeof any;
        toString(): string;
        getFile(): Internal.BaseQuestFile;
        isCompleted(id: any): boolean;
        changeProgress(id: any, consumer: Internal.Consumer_<Internal.ProgressChange>): void;
        notifyAll(): void;
        getOnlineMembers(): Internal.EntityArrayList;
        getRelativeProgress(id: any): number;
        getTaskProgress(id: any): number;
        setLocked(v: boolean): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLocked(): boolean;
        reset(id: any): void;
        isStarted(id: any): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        addProgress(id: any, progress: number): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get file(): Internal.BaseQuestFile
        get onlineMembers(): Internal.EntityArrayList
        set locked(v: boolean)
        get locked(): boolean
        get data(): Internal.TeamData
    }
    type FTBQuestsKubeJSTeamDataWrapper_ = FTBQuestsKubeJSTeamDataWrapper;
    class PlayerOwner extends Internal.MachineOwner {
        constructor(arg0: Internal.UUID_)
        getClass(): typeof any;
        displayInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        static getOwner(arg0: Internal.UUID_): Internal.MachineOwner;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "isPlayerInTeam(net.minecraft.world.entity.player.Player)"(arg0: Internal.Player_): boolean;
        getName(): string;
        getTypeDisplayName(): net.minecraft.network.chat.Component;
        isPlayerInTeam(arg0: Internal.Player_): boolean;
        static canBreakOwnerMachine(arg0: Internal.Player_, arg1: Internal.MetaMachine_): boolean;
        getMembers(): Internal.Set<Internal.UUID>;
        toString(): string;
        static init(): void;
        isPlayerInTeam(arg0: Internal.UUID_): boolean;
        notifyAll(): void;
        isPlayerFriendly(arg0: Internal.Player_): boolean;
        isPlayerFriendly(arg0: Internal.UUID_): boolean;
        static canOpenOwnerMachine(arg0: Internal.Player_, arg1: Internal.MetaMachine_): boolean;
        hashCode(): number;
        "isPlayerFriendly(net.minecraft.world.entity.player.Player)"(arg0: Internal.Player_): boolean;
        "isPlayerFriendly(java.util.UUID)"(arg0: Internal.UUID_): boolean;
        getPlayerUUID(): Internal.UUID;
        wait(): void;
        getUUID(): Internal.UUID;
        wait(arg0: number): void;
        "isPlayerInTeam(java.util.UUID)"(arg0: Internal.UUID_): boolean;
        equals(arg0: any): boolean;
        static getPlayerOwner(arg0: Internal.UUID_): Internal.PlayerOwner;
        static displayPlayerInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.UUID_): void;
        get class(): typeof any
        get name(): string
        get typeDisplayName(): net.minecraft.network.chat.Component
        get members(): Internal.Set<Internal.UUID>
        get playerUUID(): Internal.UUID
        get UUID(): Internal.UUID
    }
    type PlayerOwner_ = PlayerOwner;
    class FragmentManager implements Internal.FragmentResultOwner {
        getClass(): typeof any;
        setFragmentResult(requestKey: string, result: Internal.DataSet_): void;
        popBackStack(): void;
        removeFragmentOnAttachListener(listener: Internal.FragmentOnAttachListener_): void;
        popBackStackImmediate(id: number, flags: number): boolean;
        "popBackStack(java.lang.String,int)"(name: string, flags: number): void;
        setFragmentFactory(fragmentFactory: Internal.FragmentFactory_): void;
        notify(): void;
        "popBackStack(int,int)"(id: number, flags: number): void;
        wait(arg0: number, arg1: number): void;
        popBackStack(id: number, flags: number): void;
        setFragmentResultListener(requestKey: string, lifecycleOwner: Internal.LifecycleOwner_, listener: Internal.FragmentResultListener_): void;
        addOnBackStackChangedListener(listener: Internal.FragmentManager$OnBackStackChangedListener_): void;
        popBackStack(name: string, flags: number): void;
        findFragmentById(id: number): Internal.Fragment;
        static findFragment<F extends Internal.Fragment>(view: icyllis.modernui.view.View_): F;
        getFragments(): Internal.List<Internal.Fragment>;
        clearFragmentResultListener(requestKey: string): void;
        "popBackStackImmediate(int,int)"(id: number, flags: number): boolean;
        beginTransaction(): Internal.FragmentTransaction;
        toString(): string;
        removeOnBackStackChangedListener(listener: Internal.FragmentManager$OnBackStackChangedListener_): void;
        findFragmentByTag(tag: string): Internal.Fragment;
        notifyAll(): void;
        isStateSaved(): boolean;
        registerFragmentLifecycleCallbacks(cb: Internal.FragmentLifecycleCallbacks_, recursive: boolean): void;
        popBackStackImmediate(name: string, flags: number): boolean;
        unregisterFragmentLifecycleCallbacks(cb: Internal.FragmentLifecycleCallbacks_): void;
        getFragment(bundle: Internal.DataSet_, key: string): Internal.Fragment;
        popBackStackImmediate(): boolean;
        getBackStackEntryAt(index: number): Internal.FragmentManager$BackStackEntry;
        executePendingTransactions(): boolean;
        hashCode(): number;
        dump(prefix: string, fd: Internal.FileDescriptor_, writer: Internal.PrintWriter_, ...args: string[]): void;
        wait(): void;
        "popBackStackImmediate(java.lang.String,int)"(name: string, flags: number): boolean;
        addFragmentOnAttachListener(listener: Internal.FragmentOnAttachListener_): void;
        wait(arg0: number): void;
        putFragment(bundle: Internal.DataSet_, key: string, fragment: Internal.Fragment_): void;
        isDestroyed(): boolean;
        clearFragmentResult(requestKey: string): void;
        getBackStackEntryCount(): number;
        equals(arg0: any): boolean;
        getFragmentFactory(): Internal.FragmentFactory;
        getPrimaryNavigationFragment(): Internal.Fragment;
        get class(): typeof any
        set fragmentFactory(fragmentFactory: Internal.FragmentFactory_)
        get fragments(): Internal.List<Internal.Fragment>
        get stateSaved(): boolean
        get destroyed(): boolean
        get backStackEntryCount(): number
        get fragmentFactory(): Internal.FragmentFactory
        get primaryNavigationFragment(): Internal.Fragment
        static readonly POP_BACK_STACK_INCLUSIVE: (1) & (number);
    }
    type FragmentManager_ = FragmentManager;
    interface FlavorMap {
        abstract getFlavorsForNatives(arg0: string[]): Internal.Map<string, Internal.DataFlavor>;
        abstract getNativesForFlavors(arg0: Internal.DataFlavor_[]): Internal.Map<Internal.DataFlavor, string>;
    }
    type FlavorMap_ = FlavorMap;
    class GpuWarnlistManager extends Internal.SimplePreparableReloadListener<any> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        showWarning(): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRendererWarnings(): string;
        hasWarnings(): boolean;
        hashCode(): number;
        resetWarnings(): void;
        getVersionWarnings(): string;
        wait(): void;
        willShowWarning(): boolean;
        getAllWarnings(): string;
        getVendorWarnings(): string;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isSkippingFabulous(): boolean;
        dismissWarningAndSkipFabulous(): void;
        dismissWarning(): void;
        isShowingWarning(): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get rendererWarnings(): string
        get versionWarnings(): string
        get allWarnings(): string
        get vendorWarnings(): string
        get name(): string
        get skippingFabulous(): boolean
        get showingWarning(): boolean
    }
    type GpuWarnlistManager_ = GpuWarnlistManager;
    interface IOStatement extends ca.teamdman.sfml.ast.Statement, Internal.ToStringPretty {
        getDescendantStatements(): Internal.Stream<ca.teamdman.sfml.ast.Statement>;
        abstract resourceLimits(): Internal.ResourceLimits;
        getStatements(): Internal.List<ca.teamdman.sfml.ast.Statement>;
        abstract each(): boolean;
        abstract labelAccess(): Internal.LabelAccess;
        toStringPretty(): string;
        abstract tick(arg0: Internal.ProgramContext_): void;
        getReferencedIOResourceIds(): Internal.Stream<Internal.ResourceIdentifier<any, any, any>>;
        get descendantStatements(): Internal.Stream<ca.teamdman.sfml.ast.Statement>
        get statements(): Internal.List<ca.teamdman.sfml.ast.Statement>
        get referencedIOResourceIds(): Internal.Stream<Internal.ResourceIdentifier<any, any, any>>
    }
    type IOStatement_ = IOStatement;
    interface MutableAttributeSet extends Internal.AttributeSet {
        abstract isDefined(arg0: any): boolean;
        abstract getResolveParent(): Internal.AttributeSet;
        abstract removeAttributes(arg0: Internal.Enumeration_<any>): void;
        abstract "removeAttributes(javax.swing.text.AttributeSet)"(arg0: Internal.AttributeSet_): void;
        abstract getAttribute(arg0: any): any;
        abstract removeAttribute(arg0: any): void;
        abstract "removeAttributes(java.util.Enumeration)"(arg0: Internal.Enumeration_<any>): void;
        abstract getAttributeNames(): Internal.Enumeration<any>;
        abstract setResolveParent(arg0: Internal.AttributeSet_): void;
        abstract containsAttributes(arg0: Internal.AttributeSet_): boolean;
        abstract addAttribute(arg0: any, arg1: any): void;
        abstract copyAttributes(): Internal.AttributeSet;
        abstract getAttributeCount(): number;
        abstract containsAttribute(arg0: any, arg1: any): boolean;
        abstract addAttributes(arg0: Internal.AttributeSet_): void;
        abstract removeAttributes(arg0: Internal.AttributeSet_): void;
        abstract isEqual(arg0: Internal.AttributeSet_): boolean;
        get resolveParent(): Internal.AttributeSet
        get attributeNames(): Internal.Enumeration<any>
        set resolveParent(arg0: Internal.AttributeSet_)
        get attributeCount(): number
    }
    type MutableAttributeSet_ = MutableAttributeSet;
    class ClassicVeinGenerator extends Internal.VeinGenerator {
        constructor(arg0: Internal.ClassicVeinGenerator$Layer_, arg1: Internal.ClassicVeinGenerator$Layer_, arg2: Internal.ClassicVeinGenerator$Layer_, arg3: Internal.ClassicVeinGenerator$Layer_, arg4: number)
        constructor(arg0: GTOreVein_)
        secondary(arg0: Internal.Consumer_<Internal.ClassicVeinGenerator$Layer$Builder>): this;
        getClass(): typeof any;
        toString(): string;
        getAllEntries(): Internal.List<Internal.VeinGenerator$VeinEntry>;
        getAllBlocks(): Internal.List<Internal.BlockState>;
        notifyAll(): void;
        between(arg0: Internal.Consumer_<Internal.ClassicVeinGenerator$Layer$Builder>): this;
        yRadius(arg0: number): this;
        rules(arg0: Internal.RuleTest_[]): this;
        notify(): void;
        primary(arg0: Internal.Consumer_<Internal.ClassicVeinGenerator$Layer$Builder>): this;
        wait(arg0: number, arg1: number): void;
        static mapTarget(arg0: Internal.Either_<Internal.List<Internal.OreConfiguration$TargetBlockState>, com.gregtechceu.gtceu.api.data.chemical.material.Material>): Internal.Stream<Internal.Either<Internal.BlockState, com.gregtechceu.gtceu.api.data.chemical.material.Material>>;
        getAllChances(): Internal.IntList;
        hashCode(): number;
        wait(): void;
        sporadic(arg0: Internal.Consumer_<Internal.ClassicVeinGenerator$Layer$Builder>): this;
        wait(arg0: number): void;
        codec(): Internal.Codec<Internal.VeinGenerator>;
        static mapTarget(arg0: Internal.Either_<Internal.List<Internal.OreConfiguration$TargetBlockState>, com.gregtechceu.gtceu.api.data.chemical.material.Material>, arg1: number): Internal.Stream<Internal.VeinGenerator$VeinEntry>;
        copy(): Internal.VeinGenerator;
        equals(arg0: any): boolean;
        getAllMaterials(): Internal.List<com.gregtechceu.gtceu.api.data.chemical.material.Material>;
        getValidMaterialsChances(): Internal.List<Internal.ObjectIntPair<com.gregtechceu.gtceu.api.data.chemical.material.Material>>;
        get class(): typeof any
        get allEntries(): Internal.List<Internal.VeinGenerator$VeinEntry>
        get allBlocks(): Internal.List<Internal.BlockState>
        get allChances(): Internal.IntList
        get allMaterials(): Internal.List<com.gregtechceu.gtceu.api.data.chemical.material.Material>
        get validMaterialsChances(): Internal.List<Internal.ObjectIntPair<com.gregtechceu.gtceu.api.data.chemical.material.Material>>
        static readonly CODEC: Internal.Codec<Internal.ClassicVeinGenerator>;
    }
    type ClassicVeinGenerator_ = ClassicVeinGenerator;
    class Style {
        getClass(): typeof any;
        applyFormats(...arg0: Internal.ChatFormatting_[]): this;
        getInsertion(): string;
        withHoverEvent(arg0: Internal.HoverEvent_): this;
        isBold(): boolean;
        "withColor(net.minecraft.ChatFormatting)"(arg0: Internal.ChatFormatting_): this;
        isEmpty(): boolean;
        isStrikethrough(): boolean;
        isObfuscated(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        withBold(arg0: boolean): this;
        getFont(): ResourceLocation;
        isItalic(): boolean;
        getHoverEvent(): Internal.HoverEvent;
        isUnderlined(): boolean;
        withStrikethrough(arg0: boolean): this;
        withObfuscated(arg0: boolean): this;
        toString(): string;
        withColor(arg0: Internal.ChatFormatting_): this;
        applyTo(arg0: Internal.Style_): this;
        notifyAll(): void;
        withInsertion(arg0: string): this;
        getColor(): Internal.TextColor;
        withColor(arg0: number): this;
        getClickEvent(): Internal.ClickEvent;
        hashCode(): number;
        withUnderlined(arg0: boolean): this;
        withFont(arg0: ResourceLocation_): this;
        wait(): void;
        withColor(arg0: Internal.TextColor_): this;
        withClickEvent(arg0: Internal.ClickEvent_): this;
        "withColor(net.minecraft.network.chat.TextColor)"(arg0: Internal.TextColor_): this;
        withItalic(arg0: boolean): this;
        wait(arg0: number): void;
        applyLegacyFormat(arg0: Internal.ChatFormatting_): this;
        equals(arg0: any): boolean;
        applyFormat(arg0: Internal.ChatFormatting_): this;
        "withColor(int)"(arg0: number): this;
        get class(): typeof any
        get insertion(): string
        get bold(): boolean
        get empty(): boolean
        get strikethrough(): boolean
        get obfuscated(): boolean
        get font(): ResourceLocation
        get italic(): boolean
        get hoverEvent(): Internal.HoverEvent
        get underlined(): boolean
        get color(): Internal.TextColor
        get clickEvent(): Internal.ClickEvent
        static readonly EMPTY: (Internal.Style) & (Internal.Style);
        static readonly DEFAULT_FONT: (ResourceLocation) & (ResourceLocation);
        static readonly FORMATTING_CODEC: Internal.Codec<Internal.Style>;
    }
    type Style_ = Style;
    interface EventListener {
    }
    type EventListener_ = EventListener;
    class GTStandingSignBlock extends Internal.StandingSignBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.WoodType_)
        getSignHitboxCenterPosition(arg0: Internal.BlockState_): Vec3d;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static getWoodType(arg0: Internal.Block_): Internal.WoodType;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        openTextEdit(arg0: Internal.Player_, arg1: Internal.SignBlockEntity_, arg2: boolean): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getYRotationDegrees(arg0: Internal.BlockState_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        type(): Internal.WoodType;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type GTStandingSignBlock_ = GTStandingSignBlock;
    class TagsUpdatedEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.RegistryAccess_, arg1: boolean, arg2: boolean)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getUpdateCause(): Internal.TagsUpdatedEvent$UpdateCause;
        getRegistryAccess(): Internal.RegistryAccess;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        shouldUpdateStaticData(): boolean;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get updateCause(): Internal.TagsUpdatedEvent$UpdateCause
        get registryAccess(): Internal.RegistryAccess
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type TagsUpdatedEvent_ = TagsUpdatedEvent;
    class TargetBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type TargetBlock_ = TargetBlock;
    class PageAttributes$OrientationRequestedType extends Internal.AttributeValue {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly PORTRAIT: (Internal.PageAttributes$OrientationRequestedType) & (Internal.PageAttributes$OrientationRequestedType);
        static readonly LANDSCAPE: (Internal.PageAttributes$OrientationRequestedType) & (Internal.PageAttributes$OrientationRequestedType);
    }
    type PageAttributes$OrientationRequestedType_ = PageAttributes$OrientationRequestedType;
    interface Object2IntSortedMap <K> extends Internal.SortedMap<K, number>, Internal.Object2IntMap<K> {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)"(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        reversed(): Internal.SortedMap<K, number>;
        /**
         * @deprecated
        */
        "mergeInt(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object,java.lang.Object)"(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        values(): Internal.Collection<any>;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        lastEntry(): Internal.Map$Entry<K, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        pollLastEntry(): Internal.Map$Entry<K, number>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        replace(arg0: K, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        sequencedKeySet(): Internal.SequencedSet<K>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        "remove(java.lang.Object,int)"(arg0: any, arg1: number): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        put(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer,java.lang.Integer)"(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Integer,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        "merge(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        sequencedValues(): Internal.SequencedCollection<number>;
        abstract lastKey(): K;
        abstract size(): number;
        abstract putAll(arg0: Internal.Map_<K, number>): void;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        putFirst(arg0: K, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        "computeIfAbsent(java.lang.Object,it.unimi.dsi.fastutil.objects.Object2IntFunction)"(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        "mergeInt(java.lang.Object,int,java.util.function.IntBinaryOperator)"(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract defaultReturnValue(): number;
        removeInt(arg0: any): number;
        "putIfAbsent(java.lang.Object,int)"(arg0: K, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "computeIfAbsent(java.lang.Object,java.util.function.ToIntFunction)"(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        abstract comparator(): Internal.Comparator<K>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract object2IntEntrySet(): Internal.ObjectSortedSet<Internal.Object2IntMap$Entry<K>>;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        "mergeInt(java.lang.Object,int,it.unimi.dsi.fastutil.ints.IntBinaryOperator)"(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        subMap(arg0: any, arg1: any): Internal.SortedMap<any, any>;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<any>;
        abstract "containsValue(int)"(arg0: number): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        putLast(arg0: K, arg1: number): number;
        firstEntry(): Internal.Map$Entry<K, number>;
        pollFirstEntry(): Internal.Map$Entry<K, number>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract isEmpty(): boolean;
        sequencedEntrySet(): Internal.SequencedSet<Internal.Map$Entry<K, number>>;
        "replace(java.lang.Object,int)"(arg0: K, arg1: number): number;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        abstract containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        abstract containsValue(arg0: number): boolean;
        "replace(java.lang.Object,int,int)"(arg0: K, arg1: number, arg2: number): boolean;
        computeInt(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        tailMap(arg0: any): Internal.SortedMap<any, any>;
        remove(arg0: any, arg1: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        headMap(arg0: any): Internal.SortedMap<any, any>;
        computeIntIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        keySet(): Internal.ObjectSet<any>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        mergeInt(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        putIfAbsent(arg0: K, arg1: number): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.Function)"(arg0: K, arg1: Internal.Function_<K, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "containsValue(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        abstract equals(arg0: any): boolean;
        abstract firstKey(): K;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        get empty(): boolean
    }
    type Object2IntSortedMap_<K> = Object2IntSortedMap<K>;
    class PacketDistributor$PacketTarget {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getDirection(): Internal.NetworkDirection;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        send(arg0: Internal.Packet_<any>): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get direction(): Internal.NetworkDirection
    }
    type PacketDistributor$PacketTarget_ = PacketDistributor$PacketTarget;
    interface FilenameFilter {
        abstract accept(arg0: Internal.File_, arg1: string): boolean;
        (arg0: Internal.File, arg1: string): boolean;
    }
    type FilenameFilter_ = FilenameFilter | ((arg0: Internal.File, arg1: string)=> boolean);
    class TimeArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.TimeArgument> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.TimeArgument;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        type(): Internal.ArgumentTypeInfo<Internal.TimeArgument, any>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type TimeArgument$Info$Template_ = TimeArgument$Info$Template;
    class ClientboundSetExperiencePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getTotalExperience(): number;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getExperienceLevel(): number;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        getExperienceProgress(): number;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get totalExperience(): number
        get experienceLevel(): number
        get experienceProgress(): number
    }
    type ClientboundSetExperiencePacket_ = ClientboundSetExperiencePacket;
    interface NumberComponent <T extends number> extends Internal.RecipeComponent<T> {
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T>;
        floatRange(min: number, max: number): Internal.NumberComponent$FloatRange;
        key(name: string): Internal.RecipeKey<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        abstract read(arg0: Internal.RecipeJS_, arg1: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        doubleRange(min: number, max: number): Internal.NumberComponent$DoubleRange;
        longRange(min: number, max: number): Internal.NumberComponent$LongRange;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        intRange(min: number, max: number): Internal.NumberComponent$IntRange;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        abstract write(arg0: Internal.RecipeJS_, arg1: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
        readonly DOUBLE: (Internal.NumberComponent$DoubleRange) & (Internal.NumberComponent$DoubleRange);
        readonly ANY_FLOAT: (Internal.NumberComponent$FloatRange) & (Internal.NumberComponent$FloatRange);
        readonly DYNAMIC_FLOAT: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly DYNAMIC_DOUBLE: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly FLOAT: (Internal.NumberComponent$FloatRange) & (Internal.NumberComponent$FloatRange);
        readonly ANY_LONG: (Internal.NumberComponent$LongRange) & (Internal.NumberComponent$LongRange);
        readonly INT: (Internal.NumberComponent$IntRange) & (Internal.NumberComponent$IntRange);
        readonly LONG: (Internal.NumberComponent$LongRange) & (Internal.NumberComponent$LongRange);
        readonly DYNAMIC_INT: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly DYNAMIC_LONG: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly ANY_INT: (Internal.NumberComponent$IntRange) & (Internal.NumberComponent$IntRange);
        readonly ANY_DOUBLE: (Internal.NumberComponent$DoubleRange) & (Internal.NumberComponent$DoubleRange);
    }
    type NumberComponent_<T extends number> = NumberComponent<T>;
    class LeverBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        pull(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        static canAttach(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type LeverBlock_ = LeverBlock;
    class BlockIngredientBuffer extends Internal.BlockBaseGui<Internal.TileIngredientBuffer> {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static fixtureProps(): Internal.BlockBehaviour$Properties;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TileIngredientBuffer;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getOrientationStrategy(): Internal.IOrientationStrategy;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TileIngredientBuffer>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        openGui(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        onActivated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static metalProps(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        "openGui(com.glodblock.github.extendedae.common.tileentities.TileIngredientBuffer,net.minecraft.world.entity.player.Player)"(arg0: Internal.TileIngredientBuffer_, arg1: Internal.Player_): void;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static stoneProps(): Internal.BlockBehaviour$Properties;
        static glassProps(): Internal.BlockBehaviour$Properties;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        check(arg0: Internal.TileIngredientBuffer_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        openGui(arg0: Internal.TileIngredientBuffer_, arg1: Internal.Player_): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        setBlockEntity(arg0: typeof Internal.TileIngredientBuffer, arg1: Internal.BlockEntityType_<Internal.TileIngredientBuffer>, arg2: Internal.BlockEntityTicker_<Internal.TileIngredientBuffer>, arg3: Internal.BlockEntityTicker_<Internal.TileIngredientBuffer>): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        "openGui(appeng.blockentity.AEBaseBlockEntity,net.minecraft.world.entity.player.Player)"(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.TileIngredientBuffer;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRegistryName(): ResourceLocation;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get orientationStrategy(): Internal.IOrientationStrategy
        get blockEntityType(): Internal.BlockEntityType<Internal.TileIngredientBuffer>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type BlockIngredientBuffer_ = BlockIngredientBuffer;
    class ModelEvent$ModifyBakingResult extends Internal.ModelEvent implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<ResourceLocation, Internal.BakedModel>, arg1: Internal.ModelBakery_)
        getModels(): Internal.Map<ResourceLocation, Internal.BakedModel>;
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getModelBakery(): Internal.ModelBakery;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get models(): Internal.Map<ResourceLocation, Internal.BakedModel>
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get modelBakery(): Internal.ModelBakery
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ModelEvent$ModifyBakingResult_ = ModelEvent$ModifyBakingResult;
    class UserBanList extends Internal.StoredUserList<Internal.GameProfile, Internal.UserBanListEntry> {
        constructor(arg0: Internal.File_)
        getClass(): typeof any;
        "remove(com.mojang.authlib.GameProfile)"(arg0: Internal.GameProfile_): void;
        toString(): string;
        remove(arg0: Internal.GameProfile_): void;
        notifyAll(): void;
        remove(arg0: Internal.StoredUserEntry_<Internal.GameProfile>): void;
        isEmpty(): boolean;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        isBanned(arg0: Internal.GameProfile_): boolean;
        getFile(): Internal.File;
        getEntries(): Internal.Collection<Internal.UserBanListEntry>;
        hashCode(): number;
        add(arg0: Internal.UserBanListEntry_): void;
        wait(): void;
        "remove(net.minecraft.server.players.StoredUserEntry)"(arg0: Internal.StoredUserEntry_<Internal.GameProfile>): void;
        getUserList(): string[];
        wait(arg0: number): void;
        load(): void;
        get(arg0: Internal.GameProfile_): Internal.UserBanListEntry;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
        get file(): Internal.File
        get entries(): Internal.Collection<Internal.UserBanListEntry>
        get userList(): string[]
    }
    type UserBanList_ = UserBanList;
    interface IItemSustainedInventory extends Internal.ISustainedInventory, Internal.IDroppableContents {
        hasSustainedInventory(): boolean;
        setSustainedInventory(nbtTags: Internal.ListTag_): void;
        getSustainedInventory(stack: Internal.ItemStack_): Internal.ListTag;
        getDroppedSlots(stack: Internal.ItemStack_): Internal.List<Internal.IInventorySlot>;
        getSustainedInventory(): Internal.ListTag;
        hasSustainedInventory(stack: Internal.ItemStack_): boolean;
        setSustainedInventory(nbtTags: Internal.ListTag_, stack: Internal.ItemStack_): void;
        canContentsDrop(stack: Internal.ItemStack_): boolean;
        set sustainedInventory(nbtTags: Internal.ListTag_)
        get sustainedInventory(): Internal.ListTag
    }
    type IItemSustainedInventory_ = IItemSustainedInventory;
    class NetherSproutsBlock extends Internal.BushBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type NetherSproutsBlock_ = NetherSproutsBlock;
    interface IForgeBlockAndTintGetter {
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    }
    type IForgeBlockAndTintGetter_ = IForgeBlockAndTintGetter;
    class SFMLBaseVisitor <T> extends Internal.AbstractParseTreeVisitor<T> implements Internal.SFMLVisitor<T> {
        constructor()
        visitIdentifier(arg0: Internal.SFMLParser$IdentifierContext_): T;
        visitQuantityLimit(arg0: Internal.SFMLParser$QuantityLimitContext_): T;
        visitTimerTrigger(arg0: Internal.SFMLParser$TimerTriggerContext_): T;
        notify(): void;
        visitErrorNode(arg0: Internal.ErrorNode_): T;
        visitWithNegation(arg0: Internal.SFMLParser$WithNegationContext_): T;
        visitSide(arg0: Internal.SFMLParser$SideContext_): T;
        visitString(arg0: Internal.SFMLParser$StringContext_): T;
        visitInputStatement(arg0: Internal.SFMLParser$InputStatementContext_): T;
        visitName(arg0: Internal.SFMLParser$NameContext_): T;
        visitInputResourceLimits(arg0: Internal.SFMLParser$InputResourceLimitsContext_): T;
        visitStringLabel(arg0: Internal.SFMLParser$StringLabelContext_): T;
        visitBlock(arg0: Internal.SFMLParser$BlockContext_): T;
        visitLabelAccess(arg0: Internal.SFMLParser$LabelAccessContext_): T;
        visitRawLabel(arg0: Internal.SFMLParser$RawLabelContext_): T;
        visitRange(arg0: Internal.SFMLParser$RangeContext_): T;
        visit(arg0: Internal.ParseTree_): T;
        visitNumber(arg0: Internal.SFMLParser$NumberContext_): T;
        visitResourceIdList(arg0: Internal.SFMLParser$ResourceIdListContext_): T;
        visitIfStatement(arg0: Internal.SFMLParser$IfStatementContext_): T;
        visitTagMatcher(arg0: Internal.SFMLParser$TagMatcherContext_): T;
        visitRetention(arg0: Internal.SFMLParser$RetentionContext_): T;
        visitProgram(arg0: Internal.SFMLParser$ProgramContext_): T;
        visitWithDisjunction(arg0: Internal.SFMLParser$WithDisjunctionContext_): T;
        visitBooleanDisjunction(arg0: Internal.SFMLParser$BooleanDisjunctionContext_): T;
        visitPulseTrigger(arg0: Internal.SFMLParser$PulseTriggerContext_): T;
        visitResource(arg0: Internal.SFMLParser$ResourceContext_): T;
        wait(): void;
        visitOutputStatement(arg0: Internal.SFMLParser$OutputStatementContext_): T;
        visitBooleanConjunction(arg0: Internal.SFMLParser$BooleanConjunctionContext_): T;
        visitWithConjunction(arg0: Internal.SFMLParser$WithConjunctionContext_): T;
        visitIntervalNoSpace(arg0: Internal.SFMLParser$IntervalNoSpaceContext_): T;
        visitOutputResourceLimits(arg0: Internal.SFMLParser$OutputResourceLimitsContext_): T;
        visitBooleanFalse(arg0: Internal.SFMLParser$BooleanFalseContext_): T;
        visitStringResource(arg0: Internal.SFMLParser$StringResourceContext_): T;
        getClass(): typeof any;
        visitResourceLimitList(arg0: Internal.SFMLParser$ResourceLimitListContext_): T;
        visitSetOp(arg0: Internal.SFMLParser$SetOpContext_): T;
        visitEachSide(arg0: Internal.SFMLParser$EachSideContext_): T;
        wait(arg0: number, arg1: number): void;
        visitStatement(arg0: Internal.SFMLParser$StatementContext_): T;
        visitTerminal(arg0: Internal.TerminalNode_): T;
        visitQuantity(arg0: Internal.SFMLParser$QuantityContext_): T;
        visitResourceLimit(arg0: Internal.SFMLParser$ResourceLimitContext_): T;
        visitComparisonOp(arg0: Internal.SFMLParser$ComparisonOpContext_): T;
        visitListedSides(arg0: Internal.SFMLParser$ListedSidesContext_): T;
        visitQuantityRetentionLimit(arg0: Internal.SFMLParser$QuantityRetentionLimitContext_): T;
        visitWithTag(arg0: Internal.SFMLParser$WithTagContext_): T;
        visitRetentionLimit(arg0: Internal.SFMLParser$RetentionLimitContext_): T;
        visitRoundrobin(arg0: Internal.SFMLParser$RoundrobinContext_): T;
        visitForgetStatement(arg0: Internal.SFMLParser$ForgetStatementContext_): T;
        toString(): string;
        visitBooleanRedstone(arg0: Internal.SFMLParser$BooleanRedstoneContext_): T;
        notifyAll(): void;
        visitBooleanNegation(arg0: Internal.SFMLParser$BooleanNegationContext_): T;
        visitEmptyslots(arg0: Internal.SFMLParser$EmptyslotsContext_): T;
        visitRangeset(arg0: Internal.SFMLParser$RangesetContext_): T;
        visitBooleanTrue(arg0: Internal.SFMLParser$BooleanTrueContext_): T;
        visitWith(arg0: Internal.SFMLParser$WithContext_): T;
        visitResourceExclusion(arg0: Internal.SFMLParser$ResourceExclusionContext_): T;
        visitBooleanParen(arg0: Internal.SFMLParser$BooleanParenContext_): T;
        visitBooleanHas(arg0: Internal.SFMLParser$BooleanHasContext_): T;
        hashCode(): number;
        visitResourceIdDisjunction(arg0: Internal.SFMLParser$ResourceIdDisjunctionContext_): T;
        visitSlotqualifier(arg0: Internal.SFMLParser$SlotqualifierContext_): T;
        wait(arg0: number): void;
        visitWithParen(arg0: Internal.SFMLParser$WithParenContext_): T;
        visitChildren(arg0: Internal.RuleNode_): T;
        equals(arg0: any): boolean;
        visitIntervalSpace(arg0: Internal.SFMLParser$IntervalSpaceContext_): T;
        get class(): typeof any
    }
    type SFMLBaseVisitor_<T> = SFMLBaseVisitor<T>;
    class BabyEntitySpawnBiomeModifier extends Internal.Record implements Internal.BiomeModifier {
        constructor(babyType: Internal.BabyType_)
        constructor(babyType: Internal.BabyType_, spawnConfig: Internal.AdditionsConfig$SpawnConfig_)
        codec(): Internal.Codec<Internal.BiomeModifier>;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        modify(biome: Internal.Holder_<Internal.Biome>, phase: Internal.BiomeModifier$Phase_, builder: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
        hashCode(): number;
        wait(): void;
        spawnConfig(): Internal.AdditionsConfig$SpawnConfig;
        wait(arg0: number): void;
        babyType(): Internal.BabyType;
        equals(o: any): boolean;
        static makeCodec(): Internal.Codec<Internal.BabyEntitySpawnBiomeModifier>;
        get class(): typeof any
    }
    type BabyEntitySpawnBiomeModifier_ = BabyEntitySpawnBiomeModifier;
    interface EntityType$EntityFactory <T extends Internal.Entity> {
        abstract create(arg0: Internal.EntityType_<T>, arg1: Internal.Level_): T;
        (arg0: Internal.EntityType<T>, arg1: Internal.Level): T;
    }
    type EntityType$EntityFactory_<T extends Internal.Entity> = ((arg0: Internal.EntityType<T>, arg1: Internal.Level)=> T) | EntityType$EntityFactory<T>;
    class VillagerProfession extends Internal.Record {
        constructor(arg0: string, arg1: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, arg2: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, arg3: Internal.ImmutableSet_<Internal.Item>, arg4: Internal.ImmutableSet_<Internal.Block>, arg5: Internal.SoundEvent_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        heldJobSite(): Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        wait(arg0: number, arg1: number): void;
        name(): string;
        acquirableJobSite(): Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        hashCode(): number;
        secondaryPoi(): Internal.ImmutableSet<Internal.Block>;
        requestedItems(): Internal.ImmutableSet<Internal.Item>;
        workSound(): Internal.SoundEvent;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly WEAPONSMITH: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly FISHERMAN: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly TOOLSMITH: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly ARMORER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly CLERIC: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly BUTCHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly NONE: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly FARMER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly LEATHERWORKER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly LIBRARIAN: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly NITWIT: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly CARTOGRAPHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly MASON: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly SHEPHERD: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly ALL_ACQUIRABLE_JOBS: Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        static readonly FLETCHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
    }
    type VillagerProfession_ = VillagerProfession | Special.VillagerProfession;
    class StackTraceElement implements Internal.Serializable {
        constructor(arg0: string, arg1: string, arg2: string, arg3: number)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number)
        getClass(): typeof any;
        getModuleName(): string;
        toString(): string;
        getModuleVersion(): string;
        getClassLoaderName(): string;
        notifyAll(): void;
        getClassName(): string;
        isNativeMethod(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFileName(): string;
        getLineNumber(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getMethodName(): string;
        get class(): typeof any
        get moduleName(): string
        get moduleVersion(): string
        get classLoaderName(): string
        get className(): string
        get nativeMethod(): boolean
        get fileName(): string
        get lineNumber(): number
        get methodName(): string
    }
    type StackTraceElement_ = StackTraceElement;
    interface ScreenAccessor {
        abstract libgui$getChildren(): Internal.List<Internal.GuiEventListener>;
        (): Internal.List_<Internal.GuiEventListener>;
    }
    type ScreenAccessor_ = ScreenAccessor | (()=> Internal.List_<Internal.GuiEventListener>);
    class RedstoneLampBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly LIT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type RedstoneLampBlock_ = RedstoneLampBlock;
    class DenseImmutableTable <R, C, V> extends Internal.RegularImmutableTable<R, C, V> {
        getClass(): typeof any;
        containsValue(arg0: any): boolean;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static copyOf<R, C, V>(arg0: Internal.Table_<R, C, V>): Internal.ImmutableTable<R, C, V>;
        static of<R, C, V>(): Internal.ImmutableTable<R, C, V>;
        values(): Internal.ImmutableCollection<V>;
        static builder<R, C, V>(): Internal.ImmutableTable$Builder<R, C, V>;
        static toImmutableTable<T, R, C, V>(arg0: Internal.Function_<T, R>, arg1: Internal.Function_<T, C>, arg2: Internal.Function_<T, V>, arg3: Internal.BinaryOperator_<V>): Internal.Collector<T, any, Internal.ImmutableTable<R, C, V>>;
        column(arg0: C): Internal.ImmutableMap<R, V>;
        columnMap(): Internal.ImmutableMap<C, Internal.Map<R, V>>;
        row(arg0: any): Internal.Map<any, any>;
        rowMap(): Internal.Map<any, any>;
        cellSet(): Internal.Set<any>;
        toString(): string;
        /**
         * @deprecated
        */
        putAll(arg0: Internal.Table_<R, C, V>): void;
        notifyAll(): void;
        columnKeySet(): Internal.ImmutableSet<C>;
        rowKeySet(): Internal.ImmutableSet<R>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): V;
        size(): number;
        /**
         * @deprecated
        */
        put(arg0: R, arg1: C, arg2: V): V;
        hashCode(): number;
        wait(): void;
        /**
         * @deprecated
        */
        clear(): void;
        contains(arg0: any, arg1: any): boolean;
        wait(arg0: number): void;
        static of<R, C, V>(arg0: R, arg1: C, arg2: V): Internal.ImmutableTable<R, C, V>;
        containsRow(arg0: any): boolean;
        static toImmutableTable<T, R, C, V>(arg0: Internal.Function_<T, R>, arg1: Internal.Function_<T, C>, arg2: Internal.Function_<T, V>): Internal.Collector<T, any, Internal.ImmutableTable<R, C, V>>;
        equals(arg0: any): boolean;
        get(arg0: any, arg1: any): V;
        containsColumn(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type DenseImmutableTable_<R, C, V> = DenseImmutableTable<R, C, V>;
    class EndlessBeafItem$9 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$9_ = EndlessBeafItem$9;
    interface BlockingDeque <E> extends Internal.Deque<E>, Internal.BlockingQueue<E> {
        abstract addLast(arg0: E): void;
        abstract getLast(): E;
        abstract takeFirst(): E;
        abstract remove(): E;
        abstract poll(): E;
        abstract offerLast(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract putFirst(arg0: E): void;
        abstract putLast(arg0: E): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract descendingIterator(): Internal.Iterator<E>;
        abstract peek(): E;
        abstract addFirst(arg0: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract offer(arg0: E): boolean;
        abstract offer(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        abstract pop(): E;
        abstract offerFirst(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        abstract iterator(): Internal.Iterator<E>;
        abstract pollFirst(): E;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract push(arg0: E): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        abstract takeLast(): E;
        abstract removeLast(): E;
        abstract drainTo(arg0: Internal.Collection_<E>, arg1: number): number;
        abstract pollLast(): E;
        abstract peekLast(): E;
        abstract add(arg0: E): boolean;
        abstract element(): E;
        abstract removeFirst(): E;
        abstract pollFirst(arg0: number, arg1: Internal.TimeUnit_): E;
        abstract drainTo(arg0: Internal.Collection_<E>): number;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        abstract poll(arg0: number, arg1: Internal.TimeUnit_): E;
        abstract offerFirst(arg0: E): boolean;
        reversed(): Internal.Deque<E>;
        abstract take(): E;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract pollLast(arg0: number, arg1: Internal.TimeUnit_): E;
        abstract removeFirstOccurrence(arg0: any): boolean;
        abstract contains(arg0: any): boolean;
        abstract remainingCapacity(): number;
        abstract put(arg0: E): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(): any[];
        abstract getFirst(): E;
        abstract offerLast(arg0: E): boolean;
        abstract size(): number;
        abstract hashCode(): number;
        abstract peekFirst(): E;
        abstract removeLastOccurrence(arg0: any): boolean;
        abstract clear(): void;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        get last(): E
        get empty(): boolean
        get first(): E
    }
    type BlockingDeque_<E> = BlockingDeque<E>;
    /**
     * @deprecated
    */
    class LakeFeature extends Internal.Feature<Internal.LakeFeature$Configuration> {
        constructor(arg0: Internal.Codec_<Internal.LakeFeature$Configuration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.LakeFeature$Configuration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.LakeFeature$Configuration, Internal.Feature<Internal.LakeFeature$Configuration>>>;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        place(arg0: Internal.FeaturePlaceContext_<Internal.LakeFeature$Configuration>): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type LakeFeature_ = LakeFeature;
    class ModifierFunction$FunctionBuilder {
        constructor()
        getClass(): typeof any;
        eutModifier(arg0: Internal.ContentModifier_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        amperageMultiplier(arg0: number): this;
        tickInputModifier(arg0: Internal.ContentModifier_): this;
        amperageModifier(arg0: Internal.ContentModifier_): this;
        tickOutputModifier(arg0: Internal.ContentModifier_): this;
        durationModifier(arg0: Internal.ContentModifier_): this;
        batchParallels(arg0: number): this;
        conditions(...arg0: Internal.RecipeCondition_[]): this;
        toString(): string;
        notifyAll(): void;
        addOCs(arg0: number): this;
        modifyAllContents(arg0: Internal.ContentModifier_): this;
        build(): ModifierFunction;
        outputModifier(arg0: Internal.ContentModifier_): this;
        durationMultiplier(arg0: number): this;
        hashCode(): number;
        inputModifier(arg0: Internal.ContentModifier_): this;
        wait(): void;
        eutMultiplier(arg0: number): this;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        parallels(arg0: number): this;
        get class(): typeof any
    }
    type ModifierFunction$FunctionBuilder_ = ModifierFunction$FunctionBuilder;
    class EndlessBeafItem$4 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$4_ = EndlessBeafItem$4;
    abstract class MinerFilter <FILTER extends Internal.MinerFilter<FILTER>> extends Internal.BaseFilter<FILTER> {
        clone(): any;
        getClass(): typeof any;
        abstract canFilter(state: Internal.BlockState_): boolean;
        abstract hasFilter(): boolean;
        static readFromPacket(dataStream: Internal.FriendlyByteBuf_): Internal.IFilter<any>;
        setEnabled(enabled: boolean): void;
        "read(net.minecraft.network.FriendlyByteBuf)"(dataStream: Internal.FriendlyByteBuf_): void;
        "write(net.minecraft.network.FriendlyByteBuf)"(buffer: Internal.FriendlyByteBuf_): void;
        notify(): void;
        static readFromNBT(nbt: Internal.CompoundTag_): Internal.IFilter<any>;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        abstract getFilterType(): Internal.FilterType;
        write(nbtTags: Internal.CompoundTag_): Internal.CompoundTag;
        static fromType(filterType: Internal.FilterType_): Internal.IFilter<any>;
        abstract hasBlacklistedElement(): boolean;
        "write(net.minecraft.nbt.CompoundTag)"(nbtTags: Internal.CompoundTag_): Internal.CompoundTag;
        read(dataStream: Internal.FriendlyByteBuf_): void;
        write(buffer: Internal.FriendlyByteBuf_): void;
        replaceTargetMatches(target: Internal.Item_): boolean;
        toString(): string;
        notifyAll(): void;
        hashCode(): number;
        "read(net.minecraft.nbt.CompoundTag)"(nbtTags: Internal.CompoundTag_): void;
        read(nbtTags: Internal.CompoundTag_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        set enabled(enabled: boolean)
        get enabled(): boolean
        get filterType(): Internal.FilterType
        replaceTarget: Internal.Item;
        requiresReplacement: boolean;
    }
    type MinerFilter_<FILTER extends Internal.MinerFilter<FILTER>> = MinerFilter<FILTER>;
    class EndlessBeafItem$6 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$6_ = EndlessBeafItem$6;
    class TropicalFish extends Internal.AbstractSchoolingFish implements Internal.VariantHolder<Internal.TropicalFish$Pattern> {
        constructor(arg0: Internal.EntityType_<Internal.TropicalFish>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        static getPatternColor(arg0: number): Internal.DyeColor;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): net.minecraft.network.chat.Component;
        getBaseColor(): Internal.DyeColor;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        getPatternColor(): Internal.DyeColor;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        getVariant(): Internal.TropicalFish$Pattern;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        "setVariant(net.minecraft.world.entity.animal.TropicalFish$Pattern)"(arg0: Internal.TropicalFish$Pattern_): void;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setVariant(arg0: Internal.TropicalFish$Pattern_): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        addFollowers(arg0: Internal.Stream_<Internal.AbstractSchoolingFish>): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        hasFollowers(): boolean;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getPickupSound(): Internal.SoundEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        fromBucket(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        isFollower(): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        static getPredefinedName(arg0: number): string;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        stopFollowing(): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tlmIsJumping(): boolean;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        saveToBucketTag(arg0: Internal.ItemStack_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        static getBaseColor(arg0: number): Internal.DyeColor;
        handler$znh000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        setVariant(arg0: any): void;
        isFullyFrozen(): boolean;
        startFollowing(arg0: Internal.AbstractSchoolingFish_): Internal.AbstractSchoolingFish;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        canBeFollowed(): boolean;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        getMaxSchoolSize(): number;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        static getPattern(arg0: number): Internal.TropicalFish$Pattern;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setFromBucket(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        setTimeout(): void;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        getFrictionInfluencedSpeed(arg0: number): number;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        pathToLeader(): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        handleOnClimbable(arg0: Vec3d_): Vec3d;
        deserializeNBT(arg0: Internal.Tag_): void;
        inRangeOfLeader(): boolean;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        "setVariant(java.lang.Object)"(arg0: any): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        static checkTropicalFishSpawnRules(arg0: Internal.EntityType_<Internal.TropicalFish>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        tlmCanAddPassenger(arg0: Internal.Entity_): boolean;
        getBucketItemStack(): Internal.ItemStack;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get baseColor(): Internal.DyeColor
        get controlledVehicle(): Internal.Entity
        get patternColor(): Internal.DyeColor
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get variant(): Internal.TropicalFish$Pattern
        get maxFallDistance(): number
        get ticksFrozen(): number
        set "variant(net.minecraft.world.entity.animal.TropicalFish$Pattern)"(arg0: Internal.TropicalFish$Pattern_)
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set variant(arg0: Internal.TropicalFish$Pattern_)
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get pickupSound(): Internal.SoundEvent
        get blocking(): boolean
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get follower(): boolean
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        set variant(arg0: any)
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        get maxSchoolSize(): number
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        set fromBucket(arg0: boolean)
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        set "variant(java.lang.Object)"(arg0: any)
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get bucketItemStack(): Internal.ItemStack
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly BUCKET_VARIANT_TAG: ("BucketVariantTag") & (string);
        static readonly COMMON_VARIANTS: ([Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant]) & (Internal.List<Internal.TropicalFish$Variant>);
    }
    type TropicalFish_ = TropicalFish;
    class EndlessBeafItem$5 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$5_ = EndlessBeafItem$5;
    interface BlockPredicate {
        abstract check(arg0: Internal.BlockContainerJS_): boolean;
        (arg0: Internal.BlockContainerJS): boolean;
    }
    type BlockPredicate_ = ((arg0: Internal.BlockContainerJS)=> boolean) | BlockPredicate;
    class EndlessBeafItem$8 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$8_ = EndlessBeafItem$8;
    class EndlessBeafItem$7 extends Internal.EndlessBeafItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAsMaster(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        isFireResistant(): boolean;
        switchToolModeItem(arg0: Internal.ItemStack_, arg1: Internal.ModeManager_): Internal.ItemStack;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isChainMiningPressed(arg0: Internal.ItemStack_): boolean;
        static clearSlavePatterns(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        shouldUseChainMining(arg0: Internal.ItemStack_): boolean;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        toggleAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isSilkTouchMode(arg0: Internal.ItemStack_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static isMasterPatternProvider(arg0: BlockPos_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static isSlavePatternProvider(arg0: BlockPos_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onLivingDrops(arg0: Internal.LivingDropsEvent_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isSlaveOfCurrentMaster(arg0: BlockPos_, arg1: Internal.Level_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setEnhancedChainMiningMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        triggerForceMining(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        static getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
        addAsSlave(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Player_): void;
        setRarity(arg0: Internal.Rarity_): void;
        static setCurrentSelectedMaster(arg0: Internal.PatternProviderKey_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        static handleSlaveBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        setChainMiningPressedState(arg0: Internal.ItemStack_, arg1: boolean): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isAEStoragePriorityMode(arg0: Internal.ItemStack_): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        toggleForceMiningMode(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        onLeftClickBlock(arg0: Internal.PlayerInteractEvent$LeftClickBlock_, arg1: Internal.ItemStack_, arg2: Internal.Player_): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        updateEnchantments(arg0: Internal.ItemStack_): void;
        static resetMasterPatternProvider(arg0: Internal.Level_): void;
        setAttackDamage(attackDamage: number): void;
        static handleDrops(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.Player_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isForceMiningMode(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static onBlockDrops(arg0: Internal.BlockEvent$BreakEvent_): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static handleMasterBreak(arg0: Internal.LevelAccessor_, arg1: Internal.PatternProviderKey_): void;
        switchEnchantmentMode(arg0: Internal.ItemStack_, arg1: boolean): void;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        static getCurrentSelectedMaster(): Internal.PatternProviderKey;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        static onPlayerTick(arg0: Internal.TickEvent$PlayerTickEvent_): void;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        toggleEnhancedChainMiningMode(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        static onBlockBreak(arg0: Internal.BlockEvent$BreakEvent_): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        set currentSelectedMaster(arg0: Internal.PatternProviderKey_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get currentSelectedMaster(): Internal.PatternProviderKey
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EndlessBeafItem$7_ = EndlessBeafItem$7;
    abstract class ChunkGenerator {
        constructor(arg0: Internal.BiomeSource_, arg1: Internal.Function_<Internal.Holder<Internal.Biome>, Internal.BiomeGenerationSettings>)
        constructor(arg0: Internal.BiomeSource_)
        createStructures(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGeneratorStructureState_, arg2: Internal.StructureManager_, arg3: Internal.ChunkAccess_, arg4: Internal.StructureTemplateManager_): void;
        getClass(): typeof any;
        abstract getSeaLevel(): number;
        applyBiomeDecoration(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkAccess_, arg2: Internal.StructureManager_): void;
        createState(arg0: Internal.HolderLookup_<Internal.StructureSet>, arg1: Internal.RandomState_, arg2: number): Internal.ChunkGeneratorStructureState;
        getBiomeSource(): Internal.BiomeSource;
        notify(): void;
        getMobsAt(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.StructureManager_, arg2: Internal.MobCategory_, arg3: BlockPos_): Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        getBiomeGenerationSettings(arg0: Internal.Holder_<Internal.Biome>): Internal.BiomeGenerationSettings;
        createReferences(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkAccess_): void;
        abstract getBaseColumn(arg0: number, arg1: number, arg2: Internal.LevelHeightAccessor_, arg3: Internal.RandomState_): Internal.NoiseColumn;
        abstract spawnOriginalMobs(arg0: Internal.WorldGenRegion_): void;
        getTypeNameForDataFixer(): Internal.Optional<Internal.ResourceKey<Internal.Codec<Internal.ChunkGenerator>>>;
        abstract getMinY(): number;
        abstract addDebugScreenInfo(arg0: Internal.List_<string>, arg1: Internal.RandomState_, arg2: BlockPos_): void;
        abstract applyCarvers(arg0: Internal.WorldGenRegion_, arg1: number, arg2: Internal.RandomState_, arg3: Internal.BiomeManager_, arg4: Internal.StructureManager_, arg5: Internal.ChunkAccess_, arg6: Internal.GenerationStep$Carving_): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        toString(): string;
        getSpawnHeight(arg0: Internal.LevelHeightAccessor_): number;
        abstract getGenDepth(): number;
        notifyAll(): void;
        abstract getBaseHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        hashCode(): number;
        abstract buildSurface(arg0: Internal.WorldGenRegion_, arg1: Internal.StructureManager_, arg2: Internal.RandomState_, arg3: Internal.ChunkAccess_): void;
        abstract fillFromNoise(arg0: Internal.Executor_, arg1: Internal.Blender_, arg2: Internal.RandomState_, arg3: Internal.StructureManager_, arg4: Internal.ChunkAccess_): Internal.CompletableFuture<Internal.ChunkAccess>;
        wait(): void;
        createBiomes(arg0: Internal.Executor_, arg1: Internal.RandomState_, arg2: Internal.Blender_, arg3: Internal.StructureManager_, arg4: Internal.ChunkAccess_): Internal.CompletableFuture<Internal.ChunkAccess>;
        wait(arg0: number): void;
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        equals(arg0: any): boolean;
        findNearestMapStructure(arg0: Internal.ServerLevel_, arg1: Internal.HolderSet_<Internal.Structure>, arg2: BlockPos_, arg3: number, arg4: boolean): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Structure>>;
        get class(): typeof any
        get seaLevel(): number
        get biomeSource(): Internal.BiomeSource
        get typeNameForDataFixer(): Internal.Optional<Internal.ResourceKey<Internal.Codec<Internal.ChunkGenerator>>>
        get minY(): number
        get genDepth(): number
        readonly featuresPerStep: Internal.Supplier<Internal.List<Internal.FeatureSorter$StepFeatureData>>;
        static readonly CODEC: Internal.Codec<Internal.ChunkGenerator>;
    }
    type ChunkGenerator_ = ChunkGenerator;
    interface IPipeNode <PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType> extends Internal.IPaintable, Internal.ITickSubscription {
        abstract getFrameMaterial(): com.gregtechceu.gtceu.api.data.chemical.material.Material;
        abstract getBlockedConnections(): number;
        abstract getPaintingColor(): number;
        canHaveBlockedFaces(): boolean;
        scheduleRenderUpdate(): void;
        subscribeServerTick(arg0: Internal.TickableSubscription_, arg1: Internal.Runnable_): Internal.TickableSubscription;
        abstract getVisualConnections(): number;
        abstract setPaintingColor(arg0: number): void;
        isConnected(arg0: Internal.Direction_): boolean;
        abstract setConnections(arg0: number): void;
        abstract notifyBlockUpdate(): void;
        getRealColor(): number;
        isRemote(): boolean;
        abstract unsubscribe(arg0: Internal.TickableSubscription_): void;
        markAsDirty(): void;
        abstract setConnection(arg0: Internal.Direction_, arg1: boolean, arg2: boolean): void;
        serverTick(): void;
        scheduleNeighborShapeUpdate(): void;
        getPipeBlock(): com.gregtechceu.gtceu.api.block.PipeBlock<PipeType, NodeDataType, any>;
        abstract canAttachTo(arg0: Internal.Direction_): boolean;
        getDefaultPaintingColor(): number;
        abstract getConnections(): number;
        abstract getCoverContainer(): Internal.ICoverable;
        abstract getOffsetTimer(): number;
        getNeighbor(arg0: Internal.Direction_): Internal.BlockEntity;
        getPipeType(): PipeType;
        isPainted(): boolean;
        getPipePos(): BlockPos;
        getPipeNet(): Internal.PipeNet<NodeDataType>;
        abstract setBlocked(arg0: Internal.Direction_, arg1: boolean): void;
        getNodeData(): NodeDataType;
        getPipeLevel(): Internal.Level;
        self(): Internal.BlockEntity;
        abstract subscribeServerTick(arg0: Internal.Runnable_): Internal.TickableSubscription;
        abstract getNumConnections(): number;
        isBlocked(arg0: Internal.Direction_): boolean;
        isInValid(): boolean;
        get frameMaterial(): com.gregtechceu.gtceu.api.data.chemical.material.Material
        get blockedConnections(): number
        get paintingColor(): number
        get visualConnections(): number
        set paintingColor(arg0: number)
        set connections(arg0: number)
        get realColor(): number
        get remote(): boolean
        get pipeBlock(): com.gregtechceu.gtceu.api.block.PipeBlock<PipeType, NodeDataType, any>
        get defaultPaintingColor(): number
        get connections(): number
        get coverContainer(): Internal.ICoverable
        get offsetTimer(): number
        get pipeType(): PipeType
        get painted(): boolean
        get pipePos(): BlockPos
        get pipeNet(): Internal.PipeNet<NodeDataType>
        get nodeData(): NodeDataType
        get pipeLevel(): Internal.Level
        get numConnections(): number
        get inValid(): boolean
    }
    type IPipeNode_<PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType> = IPipeNode<PipeType, NodeDataType>;
    interface ClientLevelKJS extends Internal.LevelKJS {
        getDisplayName(): net.minecraft.network.chat.Component;
        "getBlock(net.minecraft.world.level.block.entity.BlockEntity)"(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getDimension(): ResourceLocation;
        getName(): net.minecraft.network.chat.Component;
        self(): Internal.Level;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getEntities(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        tell(message: net.minecraft.network.chat.Component_): void;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        "getBlock(net.minecraft.core.BlockPos)"(pos: BlockPos_): Internal.BlockContainerJS;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        get displayName(): net.minecraft.network.chat.Component
        get dimension(): ResourceLocation
        get name(): net.minecraft.network.chat.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get players(): Internal.EntityArrayList
        get side(): Internal.ScriptType
        get overworld(): boolean
        (): Internal.AttachedData_<Internal.Level>;
    }
    type ClientLevelKJS_ = ClientLevelKJS | (()=> Internal.AttachedData_<Internal.Level>);
    class ParsedCommandNode <S> {
        constructor(arg0: Internal.CommandNode_<S>, arg1: Internal.StringRange_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        getRange(): Internal.StringRange;
        wait(arg0: number, arg1: number): void;
        getNode(): Internal.CommandNode<S>;
        get class(): typeof any
        get range(): Internal.StringRange
        get node(): Internal.CommandNode<S>
    }
    type ParsedCommandNode_<S> = ParsedCommandNode<S>;
    class StructureTemplatePool$Projection extends Internal.Enum<Internal.StructureTemplatePool$Projection> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static values(): Internal.StructureTemplatePool$Projection[];
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.StructureTemplatePool$Projection;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getName(): string;
        static byName(arg0: string): Internal.StructureTemplatePool$Projection;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        getProcessors(): Internal.ImmutableList<Internal.StructureProcessor>;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StructureTemplatePool$Projection>>;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection)"(arg0: Internal.StructureTemplatePool$Projection_): number;
        wait(arg0: number): void;
        compareTo(arg0: Internal.StructureTemplatePool$Projection_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.StructureTemplatePool$Projection;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.StructureTemplatePool$Projection
        get name(): string
        get processors(): Internal.ImmutableList<Internal.StructureProcessor>
        static readonly TERRAIN_MATCHING: (Internal.StructureTemplatePool$Projection) & (Internal.StructureTemplatePool$Projection);
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.StructureTemplatePool$Projection>;
        static readonly RIGID: (Internal.StructureTemplatePool$Projection) & (Internal.StructureTemplatePool$Projection);
    }
    type StructureTemplatePool$Projection_ = "terrain_matching" | StructureTemplatePool$Projection | "rigid";
    abstract class BaseContainerBlockEntity extends Internal.BlockEntity implements net.minecraft.world.Container, Internal.Nameable, Internal.MenuProvider {
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        isOutOfCamera(): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        abstract getItem(arg0: number): Internal.ItemStack;
        getCustomName(): net.minecraft.network.chat.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getHeight(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        clear(): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        abstract getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        setOutOfCamera(value: boolean): void;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        isForcedVisible(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: net.minecraft.network.chat.Component_): boolean;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get width(): number
        get "empty()"(): boolean
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set customName(arg0: net.minecraft.network.chat.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        set outOfCamera(value: boolean)
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get forcedVisible(): boolean
        get modelData(): Internal.ModelData
        get mutable(): boolean
        lockKey: Internal.LockCode;
    }
    type BaseContainerBlockEntity_ = BaseContainerBlockEntity;
}
declare namespace dev.latvian.mods.rhino.mod.util.color {
    interface Color extends Internal.SpecialEquality {
        getSerializeJS(): string;
        checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        abstract getArgbJS(): number;
        createTextColorJS(): Internal.TextColor;
        specialEquals(o: any, shallow: boolean): boolean;
        getHexJS(): string;
        getRgbJS(): number;
        getFireworkColorJS(): number;
        get serializeJS(): string
        get argbJS(): number
        get hexJS(): string
        get rgbJS(): number
        get fireworkColorJS(): number
        (): number;
    }
    type Color_ = Color | (()=> number);
}
declare namespace dev.ftb.mods.ftblibrary.ui.input {
    class Key {
        constructor(k: number, s: number, m: number)
        getClass(): typeof any;
        cut(): boolean;
        selectAll(): boolean;
        deselectAll(): boolean;
        toString(): string;
        getInputMapping(): Internal.InputConstants$Key;
        enter(): boolean;
        backspace(): boolean;
        copy(): boolean;
        notifyAll(): void;
        escOrInventory(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        is(k: number): boolean;
        esc(): boolean;
        equals(arg0: any): boolean;
        paste(): boolean;
        get class(): typeof any
        get inputMapping(): Internal.InputConstants$Key
        readonly keyCode: number;
        readonly modifiers: Internal.KeyModifiers;
        readonly scanCode: number;
    }
    type Key_ = Key;
}
declare namespace icyllis.arc3d.compiler.tree {
    class Type extends icyllis.arc3d.compiler.tree.Symbol {
        isSigned(): boolean;
        getRank(): number;
        isMultiSampled(): boolean;
        getCoercionCost(other: icyllis.arc3d.compiler.tree.Type_): number;
        getEndOffset(): number;
        static makeArrayType(name: string, type: icyllis.arc3d.compiler.tree.Type_, size: number): icyllis.arc3d.compiler.tree.Type;
        resolve(): this;
        getArrayName(size: number): string;
        static makeCombinedType(name: string, abbr: string, component: icyllis.arc3d.compiler.tree.Type_, dimensions: number, isShadow: boolean, isArrayed: boolean, isMultiSampled: boolean): icyllis.arc3d.compiler.tree.Type;
        isFloat(): boolean;
        isInteger(): boolean;
        isMatrix(): boolean;
        notify(): void;
        isUnsizedArray(): boolean;
        static makeAliasType(position: number, name: string, type: icyllis.arc3d.compiler.tree.Type_): icyllis.arc3d.compiler.tree.Type;
        static makeImageType(name: string, abbr: string, component: icyllis.arc3d.compiler.tree.Type_, dimensions: number, isArrayed: boolean, isMultiSampled: boolean): icyllis.arc3d.compiler.tree.Type;
        isVoid(): boolean;
        isUnsigned(): boolean;
        isStruct(): boolean;
        static makeSamplerType(name: string, abbr: string, component: icyllis.arc3d.compiler.tree.Type_, dimensions: number, isShadow: boolean, isArrayed: boolean, isMultiSampled: boolean, isSampled: boolean, isSampler: boolean): icyllis.arc3d.compiler.tree.Type;
        isScalar(): boolean;
        getKind(): Internal.Node$SymbolKind;
        getNestingDepth(): number;
        isOpaque(): boolean;
        setName(name: string): void;
        getDimensions(): number;
        isSeparateSampler(): boolean;
        matches(other: icyllis.arc3d.compiler.tree.Type_): boolean;
        isUnsignedOrCompound(): boolean;
        static makeMatrixType(name: string, desc: string, columnType: icyllis.arc3d.compiler.tree.Type_, cols: number): icyllis.arc3d.compiler.tree.Type;
        getArraySize(): number;
        getComponentType(): this;
        getWidth(): number;
        isUsableInArray(context: icyllis.arc3d.compiler.Context_, position: number): boolean;
        isVector(): boolean;
        isBoolean(): boolean;
        getCoercibleTypes(): icyllis.arc3d.compiler.tree.Type[];
        isCombinedSampler(): boolean;
        getComponents(): number;
        accept(visitor: Internal.TreeVisitor_): boolean;
        getFields(): Internal.Type$Field[];
        getMinValue(): number;
        wait(): void;
        static makeAliasType(name: string, type: icyllis.arc3d.compiler.tree.Type_): icyllis.arc3d.compiler.tree.Type;
        isInterfaceBlock(): boolean;
        convertArraySize(context: icyllis.arc3d.compiler.Context_, position: number, sizePosition: number, size: number): number;
        toCompound(context: icyllis.arc3d.compiler.Context_, cols: number, rows: number): this;
        getClass(): typeof any;
        isArrayed(): boolean;
        isSampled(): boolean;
        static makeVectorType(name: string, desc: string, componentType: icyllis.arc3d.compiler.tree.Type_, rows: number): icyllis.arc3d.compiler.tree.Type;
        getElementType(): this;
        static makeSpecialType(name: string, abbr: string, kind: number): icyllis.arc3d.compiler.tree.Type;
        isNumeric(): boolean;
        static makeScalarType(name: string, desc: string, kind: number, rank: number, width: number): icyllis.arc3d.compiler.tree.Type;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        isShadow(): boolean;
        isArray(): boolean;
        getTypeKind(): number;
        static makeTextureType(name: string, abbr: string, component: icyllis.arc3d.compiler.tree.Type_, dimensions: number, isArrayed: boolean, isMultiSampled: boolean): icyllis.arc3d.compiler.tree.Type;
        getName(): string;
        getScalarKind(): number;
        static makeSeparateType(name: string, abbr: string, component: icyllis.arc3d.compiler.tree.Type_, isShadow: boolean): icyllis.arc3d.compiler.tree.Type;
        toVector(context: icyllis.arc3d.compiler.Context_, rows: number): this;
        static makeScalarType(name: string, desc: string, kind: number, rank: number, minWidth: number, width: number): icyllis.arc3d.compiler.tree.Type;
        static makeStructType(context: icyllis.arc3d.compiler.Context_, position: number, name: string, fields: Internal.List_<Internal.Type$Field>, interfaceBlock: boolean): icyllis.arc3d.compiler.tree.Type;
        isFloatOrCompound(): boolean;
        getCols(): number;
        toString(): string;
        isGeneric(): boolean;
        isSignedOrCompound(): boolean;
        notifyAll(): void;
        isStorageImage(): boolean;
        isInBuiltinTypes(): boolean;
        static makeGenericType(name: string, ...types: icyllis.arc3d.compiler.tree.Type_[]): icyllis.arc3d.compiler.tree.Type;
        getMinWidth(): number;
        getMaxValue(): number;
        getRows(): number;
        canCoerceTo(other: icyllis.arc3d.compiler.tree.Type_, allowNarrowing: boolean): boolean;
        getType(): this;
        coerceExpression(context: icyllis.arc3d.compiler.Context_, expr: icyllis.arc3d.compiler.tree.Expression_): icyllis.arc3d.compiler.tree.Expression;
        hashCode(): number;
        getDesc(): string;
        isRelaxedPrecision(): boolean;
        wait(arg0: number): void;
        isBooleanOrCompound(): boolean;
        convertArraySize(context: icyllis.arc3d.compiler.Context_, position: number, size: icyllis.arc3d.compiler.tree.Expression_): number;
        equals(arg0: any): boolean;
        checkLiteralOutOfRange(context: icyllis.arc3d.compiler.Context_, pos: number, value: number): boolean;
        get signed(): boolean
        get rank(): number
        get multiSampled(): boolean
        get endOffset(): number
        get "float"(): boolean
        get integer(): boolean
        get matrix(): boolean
        get unsizedArray(): boolean
        get "void"(): boolean
        get unsigned(): boolean
        get struct(): boolean
        get scalar(): boolean
        get kind(): Internal.Node$SymbolKind
        get nestingDepth(): number
        get opaque(): boolean
        set name(name: string)
        get dimensions(): number
        get separateSampler(): boolean
        get unsignedOrCompound(): boolean
        get arraySize(): number
        get componentType(): icyllis.arc3d.compiler.tree.Type
        get width(): number
        get vector(): boolean
        get "boolean"(): boolean
        get coercibleTypes(): icyllis.arc3d.compiler.tree.Type[]
        get combinedSampler(): boolean
        get components(): number
        get fields(): Internal.Type$Field[]
        get minValue(): number
        get interfaceBlock(): boolean
        get class(): typeof any
        get arrayed(): boolean
        get sampled(): boolean
        get elementType(): icyllis.arc3d.compiler.tree.Type
        get numeric(): boolean
        get startOffset(): number
        get shadow(): boolean
        get array(): boolean
        get typeKind(): number
        get name(): string
        get scalarKind(): number
        get floatOrCompound(): boolean
        get cols(): number
        get generic(): boolean
        get signedOrCompound(): boolean
        get storageImage(): boolean
        get inBuiltinTypes(): boolean
        get minWidth(): number
        get maxValue(): number
        get rows(): number
        get type(): icyllis.arc3d.compiler.tree.Type
        get desc(): string
        get relaxedPrecision(): boolean
        get booleanOrCompound(): boolean
        static readonly kScalar_TypeKind: (5) & (number);
        static readonly kUnsigned_ScalarKind: (2) & (number);
        static readonly kVector_TypeKind: (7) & (number);
        static readonly kArray_TypeKind: (0) & (number);
        static readonly kMatrix_TypeKind: (2) & (number);
        static readonly kUnsizedArray: (-1) & (number);
        static readonly kSampler_TypeKind: (4) & (number);
        static readonly kVoid_TypeKind: (8) & (number);
        static readonly kOther_TypeKind: (3) & (number);
        static readonly kGeneric_TypeKind: (1) & (number);
        static readonly kBoolean_ScalarKind: (3) & (number);
        static readonly kSigned_ScalarKind: (1) & (number);
        static readonly kStruct_TypeKind: (6) & (number);
        static readonly kNonScalar_ScalarKind: (4) & (number);
        static readonly kFloat_ScalarKind: (0) & (number);
        static readonly kMaxNestingDepth: (8) & (number);
    }
    type Type_ = Type;
}
declare namespace com.ibm.icu.util {
    class TimeUnit extends Internal.MeasureUnit {
        getClass(): typeof any;
        getSubtype(): string;
        /**
         * @deprecated
        */
        getCopyOfMeasureUnitImpl(): Internal.MeasureUnitImpl;
        reciprocal(): Internal.MeasureUnit;
        static getAvailableTypes(): Internal.Set<string>;
        notify(): void;
        /**
         * @deprecated
        */
        static fromMeasureUnitImpl(arg0: Internal.MeasureUnitImpl_): Internal.MeasureUnit;
        wait(arg0: number, arg1: number): void;
        product(arg0: Internal.MeasureUnit_): Internal.MeasureUnit;
        splitToSingleUnits(): Internal.List<Internal.MeasureUnit>;
        static getAvailable(): Internal.Set<Internal.MeasureUnit>;
        getType(): string;
        getIdentifier(): string;
        withPrefix(arg0: Internal.MeasureUnit$MeasurePrefix_): Internal.MeasureUnit;
        static forIdentifier(arg0: string): Internal.MeasureUnit;
        toString(): string;
        getDimensionality(): number;
        notifyAll(): void;
        /**
         * @deprecated
        */
        static internalGetInstance(arg0: string, arg1: string): Internal.MeasureUnit;
        getPrefix(): Internal.MeasureUnit$MeasurePrefix;
        withDimensionality(arg0: number): Internal.MeasureUnit;
        hashCode(): number;
        /**
         * @deprecated
        */
        static findBySubType(arg0: string): Internal.MeasureUnit;
        wait(): void;
        getComplexity(): Internal.MeasureUnit$Complexity;
        wait(arg0: number): void;
        static getAvailable(arg0: string): Internal.Set<Internal.MeasureUnit>;
        equals(arg0: any): boolean;
        static values(): com.ibm.icu.util.TimeUnit[];
        get class(): typeof any
        get subtype(): string
        /**
         * @deprecated
        */
        get copyOfMeasureUnitImpl(): Internal.MeasureUnitImpl
        get availableTypes(): Internal.Set<string>
        get available(): Internal.Set<Internal.MeasureUnit>
        get type(): string
        get identifier(): string
        get dimensionality(): number
        get prefix(): Internal.MeasureUnit$MeasurePrefix
        get complexity(): Internal.MeasureUnit$Complexity
    }
    type TimeUnit_ = TimeUnit;
}
declare namespace icyllis.arc3d.core {
    abstract class Image extends Internal.RefCnt {
        getClass(): typeof any;
        isTextureBacked(): boolean;
        getBounds(bounds: Internal.Rect2f_): void;
        static move<T extends Internal.RefCounted>(sp: T): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getColorType(): number;
        isAlphaOnly(): boolean;
        unref(): void;
        getUniqueID(): Internal.UniqueID;
        static move<T extends Internal.RefCounted>(sp: T, that: T): T;
        getTextureSize(): number;
        unique(): boolean;
        getAlphaType(): number;
        getHeight(): number;
        toString(): string;
        getWidth(): number;
        getContext(): icyllis.arc3d.engine.Context;
        getInfo(): Internal.ImageInfo;
        getRefCntAcquire(): number;
        notifyAll(): void;
        getBounds(bounds: icyllis.arc3d.core.Rect2i_): void;
        getColorSpace(): icyllis.arc3d.core.ColorSpace;
        ref(): void;
        static create<T extends Internal.RefCounted>(sp: T, that: T): T;
        getRefCntVolatile(): number;
        isRasterBacked(): boolean;
        getRefCnt(): number;
        "getBounds(icyllis.arc3d.core.Rect2f)"(bounds: Internal.Rect2f_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        "getBounds(icyllis.arc3d.core.Rect2i)"(bounds: icyllis.arc3d.core.Rect2i_): void;
        static create<T extends Internal.RefCounted>(that: T): T;
        equals(arg0: any): boolean;
        get class(): typeof any
        get textureBacked(): boolean
        get colorType(): number
        get alphaOnly(): boolean
        get uniqueID(): Internal.UniqueID
        get textureSize(): number
        get alphaType(): number
        get height(): number
        get width(): number
        get context(): icyllis.arc3d.engine.Context
        get info(): Internal.ImageInfo
        get refCntAcquire(): number
        get colorSpace(): icyllis.arc3d.core.ColorSpace
        get refCntVolatile(): number
        get rasterBacked(): boolean
        get refCnt(): number
    }
    type Image_ = Image;
}
