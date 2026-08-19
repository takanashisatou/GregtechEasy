/// <reference path="./internal_*.d.ts" />
declare namespace com.gregtechceu.gtceu.api.registry.registrate {
    abstract class BuilderBase <T> implements Internal.Supplier<T> {
        constructor(arg0: ResourceLocation_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        generateDataJsons(arg0: Internal.DataJsonGenerator_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        get(): T;
        generateLang(arg0: Internal.LangEventJS_): void;
        equals(arg0: any): boolean;
        abstract register(): T;
        generateAssetJsons(arg0: Internal.AssetJsonGenerator_): void;
        get class(): typeof any
        id: ResourceLocation;
    }
    type BuilderBase_<T> = BuilderBase<T>;
}
declare namespace Internal {
    interface ServerPacketListener extends Internal.PacketListener {
        abstract isAcceptingMessages(): boolean;
        abstract onDisconnect(arg0: net.minecraft.network.chat.Component_): void;
        shouldPropagateHandlingExceptions(): boolean;
        get acceptingMessages(): boolean
    }
    type ServerPacketListener_ = ServerPacketListener;
    class SpriteContents$AnimatedTexture implements Internal.SpriteContentsAnimationAccessor, me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor {
        getFrameRowSize(): number;
        getClass(): typeof any;
        toString(): string;
        uploadFrame(arg0: number, arg1: number, arg2: number): void;
        uploadFirstFrame(arg0: number, arg1: number): void;
        getFrames(): Internal.List<any>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getUniqueFrames(): Internal.IntStream;
        equals(arg0: any): boolean;
        createTicker(): Internal.SpriteTicker;
        get frameRowSize(): number
        get class(): typeof any
        get frames(): Internal.List<any>
        get uniqueFrames(): Internal.IntStream
        readonly interpolateFrames: boolean;
        readonly frames: Internal.List<Internal.SpriteContents$FrameInfo>;
        readonly frameRowSize: number;
    }
    type SpriteContents$AnimatedTexture_ = SpriteContents$AnimatedTexture;
    class InfestedRotatedPillarBlock extends Internal.InfestedBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
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
        static infestedStateByHost(arg0: Internal.BlockState_): Internal.BlockState;
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
        static isCompatibleHostBlock(arg0: Internal.BlockState_): boolean;
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
        getHostBlock(): Internal.Block;
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
        hostStateByInfested(arg0: Internal.BlockState_): Internal.BlockState;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
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
        get hostBlock(): Internal.Block
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
    type InfestedRotatedPillarBlock_ = InfestedRotatedPillarBlock;
    class MoverType extends Internal.Enum<Internal.MoverType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.entity.MoverType)"(arg0: Internal.MoverType_): number;
        toString(): string;
        static valueOf(arg0: string): Internal.MoverType;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.MoverType>>;
        static values(): Internal.MoverType[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.MoverType;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.MoverType_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.MoverType
        static readonly SHULKER: (Internal.MoverType) & (Internal.MoverType);
        static readonly PISTON: (Internal.MoverType) & (Internal.MoverType);
        static readonly SELF: (Internal.MoverType) & (Internal.MoverType);
        static readonly SHULKER_BOX: (Internal.MoverType) & (Internal.MoverType);
        static readonly PLAYER: (Internal.MoverType) & (Internal.MoverType);
    }
    type MoverType_ = "player" | MoverType | "shulker" | "shulker_box" | "self" | "piston";
    class GuiMessageTag$Icon extends Internal.Enum<Internal.GuiMessageTag$Icon> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.GuiMessageTag$Icon;
        toString(): string;
        notifyAll(): void;
        "compareTo(net.minecraft.client.GuiMessageTag$Icon)"(arg0: Internal.GuiMessageTag$Icon_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.GuiMessageTag$Icon>>;
        static values(): Internal.GuiMessageTag$Icon[];
        name(): string;
        hashCode(): number;
        draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.GuiMessageTag$Icon;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.GuiMessageTag$Icon_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.GuiMessageTag$Icon
        readonly width: number;
        static readonly CHAT_MODIFIED: (Internal.GuiMessageTag$Icon) & (Internal.GuiMessageTag$Icon);
        readonly height: number;
        readonly v: number;
        readonly u: number;
    }
    type GuiMessageTag$Icon_ = "chat_modified" | GuiMessageTag$Icon;
    class RedstoneMode extends Internal.Enum<Internal.RedstoneMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static valueOf(arg0: string): Internal.RedstoneMode;
        compareTo(arg0: Internal.RedstoneMode_): number;
        notifyAll(): void;
        static values(): Internal.RedstoneMode[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        "compareTo(appeng.api.config.RedstoneMode)"(arg0: Internal.RedstoneMode_): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.RedstoneMode;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RedstoneMode>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.RedstoneMode
        static readonly HIGH_SIGNAL: (Internal.RedstoneMode) & (Internal.RedstoneMode);
        static readonly IGNORE: (Internal.RedstoneMode) & (Internal.RedstoneMode);
        static readonly SIGNAL_PULSE: (Internal.RedstoneMode) & (Internal.RedstoneMode);
        static readonly LOW_SIGNAL: (Internal.RedstoneMode) & (Internal.RedstoneMode);
    }
    type RedstoneMode_ = "signal_pulse" | RedstoneMode | "ignore" | "high_signal" | "low_signal";
    interface ItemModelGeneratorAccessor {
        abstract callGetSpans(arg0: Internal.SpriteContents_): Internal.List<Internal.ItemModelGenerator$Span>;
        (arg0: Internal.SpriteContents): Internal.List_<Internal.ItemModelGenerator$Span>;
    }
    type ItemModelGeneratorAccessor_ = ItemModelGeneratorAccessor | ((arg0: Internal.SpriteContents)=> Internal.List_<Internal.ItemModelGenerator$Span>);
    class StringTabContainer extends TabContainer {
        constructor(editor: Internal.Editor_)
        charTyped(codePoint: string, modifiers: number): boolean;
        removeTab(tabButton: TabButton_): void;
        getPositionY(): number;
        getAnimation(): Internal.Animation;
        getXEIIngredientOverMouse(mouseX: number, mouseY: number): any;
        addWidget(index: number, widget: Widget_): WidgetGroup;
        getSelfPositionY(): number;
        setVisible(arg0: boolean): Widget;
        drawInBackground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        getBackgroundTexture(): Internal.IGuiTexture;
        updateScreen(): void;
        setLayoutPadding(layoutPadding: number): void;
        getEditor(): Internal.Editor;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        getFirstWidgetById(regex: string): Widget;
        isFocus(): boolean;
        setAllowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean): void;
        getSizeWidth(): number;
        setSelfPositionY(y: number): void;
        setGui(gui: ModularUI_): void;
        isParent(widgetGroup: WidgetGroup_): boolean;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.Resources_, isProject: boolean): Internal.CompoundTag;
        setOverlay(overlay: Internal.IGuiTexture_): Widget;
        getContainedWidgets(includeHidden: boolean): Internal.List<Widget>;
        getAlign(): Internal.Align;
        setParentPosition(parentPosition: GuiPos_): void;
        setOnChanged(onChanged: Internal.BiConsumer_<WidgetGroup, WidgetGroup>): TabContainer;
        getLayoutPadding(): number;
        waitToAdded(widget: Widget_): void;
        setId(id: string): Widget;
        getTabIndex(group: WidgetGroup_): number;
        appendHoverTooltips(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        setSizeHeight(height: number): void;
        "appendHoverTooltips(java.util.List)"(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        canDragIn(dragging: any): boolean;
        addWidget<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        isDynamicSized(): boolean;
        getAllWidgetSize(): number;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getOnChanged(): Internal.BiConsumer<WidgetGroup, WidgetGroup>;
        getLayout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout;
        getTooltipTexts(): Internal.List<net.minecraft.network.chat.Component>;
        getClass(): typeof any;
        getPositionX(): number;
        animation(animation: Internal.Animation_): void;
        removeWidgetAnima(widget: Widget_, animation: com.lowdragmc.lowdraglib.gui.animation.Transform_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getSelfPositionX(): number;
        getSizeHeight(): number;
        initWidget(): void;
        isActive(): boolean;
        "addTab(java.lang.String,com.lowdragmc.lowdraglib.gui.widget.WidgetGroup)"(name: string, group: WidgetGroup_): void;
        setDraggingConsumer(draggingAccept: Internal.Predicate_<any>, draggingIn: Internal.Consumer_<any>, draggingOut: Internal.Consumer_<any>, draggingSuccess: Internal.Consumer_<any>): Widget;
        toRectangleBox(): Internal.Rect2i;
        getHoverElement(mouseX: number, mouseY: number): Widget;
        static isAltDown(): boolean;
        setSelfPosition(x: number, y: number): void;
        isInitialized(): boolean;
        setUiAccess(uiAccess: Internal.WidgetUIAccess_): Widget;
        getChatComponent(): net.minecraft.network.chat.Component;
        canWidgetAccepted(widget: Internal.IConfigurableWidget_): boolean;
        addTab(icon: Internal.IGuiTexture_, name: string, group: WidgetGroup_, onSelected: Internal.Runnable_, onDeselected: Internal.Runnable_, onRemoved: Internal.Runnable_): void;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        calculateTabSize(): void;
        getTabGroups(): Internal.List<WidgetGroup>;
        clearAllWidgets(): void;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        waitToRemoved(widget: Widget_): void;
        setSize(width: number, height: number): void;
        toString(): string;
        notifyAll(): void;
        deserializeInnerNBT(nbt: Internal.CompoundTag_): void;
        onScreenSizeUpdate(screenWidth: number, screenHeight: number): void;
        getId(): string;
        getSize(): GuiSize;
        addTab(name: string, group: WidgetGroup_, onSelected: Internal.Runnable_): void;
        widget(): Widget;
        addSelfPosition(addX: number, addY: number): GuiPos;
        getGuiExtraAreas(guiRect: Internal.Rect2i_, list: Internal.List_<Internal.Rect2i>): Internal.List<Internal.Rect2i>;
        "addWidget(com.lowdragmc.lowdraglib.gui.widget.Widget,java.util.function.Consumer)"<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        switchTag(tabWidget: WidgetGroup_): void;
        addWidgetAnima(widget: Widget_, animation: com.lowdragmc.lowdraglib.gui.animation.Transform_): void;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        getParentPosition(): GuiPos;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        setSelfPosition(selfPosition: GuiPos_): void;
        wait(arg0: number): void;
        writeInitialData(buffer: Internal.FriendlyByteBuf_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.Resources_, isProject: boolean): void;
        mouseWheelMove(mouseX: number, mouseY: number, wheelDelta: number): boolean;
        group(): string;
        addTab(name: string, group: WidgetGroup_, onSelected: Internal.Runnable_, onDeselected: Internal.Runnable_): void;
        getOnDeselected(): Internal.Map<WidgetGroup, Internal.Runnable>;
        handleClientAction(id: number, buffer: Internal.FriendlyByteBuf_): void;
        getParent(): WidgetGroup;
        getRect(): com.lowdragmc.lowdraglib.utils.Rect;
        appendHoverTooltips(...tooltipText: string[]): Widget;
        isMouseOverElement(mouseX: number, mouseY: number): boolean;
        setSize(size: GuiSize_): void;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        static isCtrlDown(): boolean;
        isAllowXEIIngredientOverMouse(): boolean;
        setHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        isClientSideWidget(): boolean;
        notify(): void;
        readInitialData(buffer: Internal.FriendlyByteBuf_): void;
        "addTab(com.lowdragmc.lowdraglib.gui.widget.TabButton,com.lowdragmc.lowdraglib.gui.widget.WidgetGroup)"(tabButton: TabButton_, tabWidget: WidgetGroup_): void;
        setDrawBackgroundWhenHover(drawBackgroundWhenHover: boolean): Widget;
        mouseMoved(mouseX: number, mouseY: number): boolean;
        removeWidget(widget: Widget_): void;
        setFocus(focus: boolean): void;
        "appendHoverTooltips(net.minecraft.network.chat.Component[])"(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        inAnimate(): boolean;
        getSelfPosition(): GuiPos;
        setBackground(...backgroundTexture: Internal.IGuiTexture_[]): Widget;
        onFocusChanged(lastFocus: Widget_, focus: Widget_): void;
        getPosition(): GuiPos;
        isVisible(): boolean;
        setSizeWidth(width: number): void;
        static isMouseOver(x: number, y: number, width: number, height: number, mouseX: number, mouseY: number): boolean;
        "appendHoverTooltips(java.lang.String[])"(...tooltipText: string[]): Widget;
        static isShiftDown(): boolean;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        addWidgets(...widgets: Widget_[]): WidgetGroup;
        isMouseDown(button: number): boolean;
        switchTabIndex(index: number): void;
        addWidget(widget: Widget_): WidgetGroup;
        name(): string;
        serializeInnerNBT(): Internal.CompoundTag;
        wait(): void;
        getWidgetsById(regex: string): Internal.List<Widget>;
        getRegisterUI(): Internal.LDLRegister;
        setDynamicSized(dynamicSized: boolean): void;
        setHoverTexture(...hoverTexture: Internal.IGuiTexture_[]): Widget;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.Resources_, isProject: boolean): void;
        setDraggingProvider<T>(draggingProvider: Internal.Supplier_<T>, draggingRenderer: Internal.BiFunction_<T, GuiPos, Internal.IGuiTexture>): Widget;
        addTab(tabButton: TabButton_, tabWidget: WidgetGroup_): void;
        getOverlay(): Internal.IGuiTexture;
        getTabIndex(): number;
        static playButtonClickSound(): void;
        setAlign(align: Internal.Align_): Widget;
        drawOverlay(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        wait(arg0: number, arg1: number): void;
        detectAndSendChanges(): void;
        handleDragging(dragging: any): boolean;
        getOnSelected(): Internal.Map<WidgetGroup, Internal.Runnable>;
        isRemote(): boolean;
        "addWidget(int,com.lowdragmc.lowdraglib.gui.widget.Widget)"(index: number, widget: Widget_): WidgetGroup;
        addTab(name: string, group: WidgetGroup_): void;
        setLayout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_): void;
        isChild(widget: Widget_): boolean;
        readUpdateInfo(id: number, buffer: Internal.FriendlyByteBuf_): void;
        mouseDragged(mouseX: number, mouseY: number, button: number, dragX: number, dragY: number): boolean;
        static isKeyDown(keyCode: number): boolean;
        initTemplate(): void;
        getWidgetsByType<T extends Widget>(clazz: T): Internal.List<T>;
        setSelfPositionX(x: number): void;
        acceptWidget(widget: Internal.IConfigurableWidget_): void;
        drawInForeground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        getPhantomTargets(ingredient: any): Internal.List<com.lowdragmc.lowdraglib.gui.ingredient.Target>;
        appendHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.Resources_, isProject: boolean): Internal.CompoundTag;
        mouseReleased(mouseX: number, mouseY: number, button: number): boolean;
        onWidgetRemoved(widget: Internal.IConfigurableWidget_): void;
        hashCode(): number;
        setActive(isActive: boolean): Widget;
        equals(arg0: any): boolean;
        getGui(): ModularUI;
        get positionY(): number
        get animation(): Internal.Animation
        get selfPositionY(): number
        set visible(arg0: boolean)
        get backgroundTexture(): Internal.IGuiTexture
        set layoutPadding(layoutPadding: number)
        get editor(): Internal.Editor
        get focus(): boolean
        set allowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean)
        get sizeWidth(): number
        set selfPositionY(y: number)
        set gui(gui: ModularUI_)
        set overlay(overlay: Internal.IGuiTexture_)
        get align(): Internal.Align
        set parentPosition(parentPosition: GuiPos_)
        set onChanged(onChanged: Internal.BiConsumer_<WidgetGroup, WidgetGroup>)
        get layoutPadding(): number
        set id(id: string)
        set sizeHeight(height: number)
        get dynamicSized(): boolean
        get allWidgetSize(): number
        get onChanged(): Internal.BiConsumer<WidgetGroup, WidgetGroup>
        get layout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout
        get tooltipTexts(): Internal.List<net.minecraft.network.chat.Component>
        get class(): typeof any
        get positionX(): number
        get selfPositionX(): number
        get sizeHeight(): number
        get active(): boolean
        get altDown(): boolean
        get initialized(): boolean
        set uiAccess(uiAccess: Internal.WidgetUIAccess_)
        get chatComponent(): net.minecraft.network.chat.Component
        get tabGroups(): Internal.List<WidgetGroup>
        get LDLRegister(): boolean
        get id(): string
        get size(): GuiSize
        get parentPosition(): GuiPos
        set selfPosition(selfPosition: GuiPos_)
        get onDeselected(): Internal.Map<WidgetGroup, Internal.Runnable>
        get parent(): WidgetGroup
        get rect(): com.lowdragmc.lowdraglib.utils.Rect
        set size(size: GuiSize_)
        get translateKey(): string
        get ctrlDown(): boolean
        get allowXEIIngredientOverMouse(): boolean
        set hoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[])
        get clientSideWidget(): boolean
        set drawBackgroundWhenHover(drawBackgroundWhenHover: boolean)
        set focus(focus: boolean)
        get selfPosition(): GuiPos
        set background(...backgroundTexture: Internal.IGuiTexture_[])
        get position(): GuiPos
        get visible(): boolean
        set sizeWidth(width: number)
        get shiftDown(): boolean
        get registerUI(): Internal.LDLRegister
        set dynamicSized(dynamicSized: boolean)
        set hoverTexture(...hoverTexture: Internal.IGuiTexture_[])
        get overlay(): Internal.IGuiTexture
        get tabIndex(): number
        set align(align: Internal.Align_)
        get onSelected(): Internal.Map<WidgetGroup, Internal.Runnable>
        get remote(): boolean
        set layout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_)
        set selfPositionX(x: number)
        set active(isActive: boolean)
        get gui(): ModularUI
        static readonly TAB_HEIGHT: (16) & (number);
        onChanged: Internal.BiConsumer<WidgetGroup, WidgetGroup>;
    }
    type StringTabContainer_ = StringTabContainer;
    interface Int2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Int2FloatFunction;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ShortFunction<T>;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        remove(arg0: number): number;
        put(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ShortFunction;
        abstract get(arg0: number): number;
        defaultReturnValue(): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ShortFunction;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Int2ByteFunction;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ShortFunction;
        "put(int,short)"(arg0: number, arg1: number): number;
        "containsKey(int)"(arg0: number): boolean;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Short)"(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Short)"(arg0: number, arg1: number): number;
        "remove(int)"(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Int2CharFunction;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ShortFunction;
        identity(): Internal.IntUnaryOperator;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Int2LongFunction;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Int2DoubleFunction;
        "getOrDefault(int,short)"(arg0: number, arg1: number): number;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        abstract "get(int)"(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ShortFunction<T>;
        size(): number;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Int2IntFunction;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
    }
    type Int2ShortFunction_ = Int2ShortFunction;
    class TimeZoneFormat$TimeType extends Internal.Enum<Internal.TimeZoneFormat$TimeType> {
        static values(): Internal.TimeZoneFormat$TimeType[];
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TimeZoneFormat$TimeType>>;
        "compareTo(com.ibm.icu.text.TimeZoneFormat$TimeType)"(arg0: Internal.TimeZoneFormat$TimeType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.TimeZoneFormat$TimeType;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.TimeZoneFormat$TimeType_): number;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.TimeZoneFormat$TimeType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.TimeZoneFormat$TimeType
        static readonly DAYLIGHT: (Internal.TimeZoneFormat$TimeType) & (Internal.TimeZoneFormat$TimeType);
        static readonly STANDARD: (Internal.TimeZoneFormat$TimeType) & (Internal.TimeZoneFormat$TimeType);
        static readonly UNKNOWN: (Internal.TimeZoneFormat$TimeType) & (Internal.TimeZoneFormat$TimeType);
    }
    type TimeZoneFormat$TimeType_ = TimeZoneFormat$TimeType | "standard" | "daylight" | "unknown";
    interface DiscreteVoxelShape$IntFaceConsumer {
        abstract consume(arg0: Internal.Direction_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Direction, arg1: number, arg2: number, arg3: number): void;
    }
    type DiscreteVoxelShape$IntFaceConsumer_ = DiscreteVoxelShape$IntFaceConsumer | ((arg0: Internal.Direction, arg1: number, arg2: number, arg3: number)=> void);
    class FontSet implements Internal.AutoCloseable {
        constructor(arg0: Internal.TextureManager_, arg1: ResourceLocation_)
        getClass(): typeof any;
        toString(): string;
        getGlyph(arg0: number): Internal.BakedGlyph;
        notifyAll(): void;
        getRandomGlyph(arg0: Internal.GlyphInfo_): Internal.BakedGlyph;
        reload(arg0: Internal.List_<Internal.GlyphProvider>): void;
        whiteGlyph(): Internal.BakedGlyph;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        close(): void;
        getGlyphInfo(arg0: number, arg1: boolean): Internal.GlyphInfo;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type FontSet_ = FontSet;
    interface GroupPrincipal extends Internal.UserPrincipal {
        abstract hashCode(): number;
        abstract toString(): string;
        abstract getName(): string;
        abstract equals(arg0: any): boolean;
        implies(arg0: Internal.Subject_): boolean;
        get name(): string
    }
    type GroupPrincipal_ = GroupPrincipal;
    class RandomSpreadFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_, arg3: number)
        getClass(): typeof any;
        hashCode(): number;
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        equals(arg0: any): boolean;
        notify(): void;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.RandomSpreadFoliagePlacer>;
    }
    type RandomSpreadFoliagePlacer_ = RandomSpreadFoliagePlacer;
    class BufferBuilder$RenderedBuffer {
        getClass(): typeof any;
        indexBuffer(): Internal.ByteBuffer;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        drawState(): Internal.BufferBuilder$DrawState;
        hashCode(): number;
        vertexBuffer(): Internal.ByteBuffer;
        wait(): void;
        release(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type BufferBuilder$RenderedBuffer_ = BufferBuilder$RenderedBuffer;
    interface RandomAccess {
    }
    type RandomAccess_ = RandomAccess;
    class ModuleConfigItem <TYPE> implements Internal.IModuleConfigItem<TYPE> {
        constructor(module: mekanism.common.content.gear.Module_<any>, name: string, description: Internal.ILangEntry_, data: Internal.ModuleConfigData_<TYPE>)
        getClass(): typeof any;
        getData(): Internal.ModuleConfigData<TYPE>;
        toString(): string;
        notifyAll(): void;
        write(tag: Internal.CompoundTag_): void;
        set(val: TYPE, callback: Internal.Runnable_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get(): TYPE;
        hashCode(): number;
        read(tag: Internal.CompoundTag_): void;
        wait(): void;
        getName(): string;
        set(val: TYPE): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        matches(moduleType: Internal.IModuleDataProvider_<any>, name: string): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        get class(): typeof any
        get data(): Internal.ModuleConfigData<TYPE>
        get name(): string
        get description(): net.minecraft.network.chat.Component
    }
    type ModuleConfigItem_<TYPE> = ModuleConfigItem<TYPE>;
    interface Long2ObjectSortedMap$FastSortedEntrySet <V> extends Internal.ObjectSortedSet<Internal.Long2ObjectMap$Entry<V>>, Internal.Long2ObjectMap$FastEntrySet<V> {
        forEach(arg0: Internal.Consumer_<Internal.Long2ObjectMap$Entry<V>>): void;
        removeLast(): Internal.Long2ObjectMap$Entry<V>;
        subSet(arg0: any, arg1: any): Internal.SortedSet<any>;
        "of(java.lang.Object)"<K>(arg0: K): Internal.ObjectSet<K>;
        of<K>(arg0: K, arg1: K): Internal.ObjectSet<K>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        getLast(): Internal.Long2ObjectMap$Entry<V>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract addAll(arg0: Internal.Collection_<Internal.Long2ObjectMap$Entry<V>>): boolean;
        abstract iterator(arg0: Internal.Long2ObjectMap$Entry_<V>): Internal.ObjectBidirectionalIterator<Internal.Long2ObjectMap$Entry<V>>;
        addLast(arg0: Internal.Long2ObjectMap$Entry_<V>): void;
        stream(): Internal.Stream<Internal.Long2ObjectMap$Entry<V>>;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        of<K>(): Internal.ObjectSet<K>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract fastIterator(): Internal.ObjectBidirectionalIterator<Internal.Long2ObjectMap$Entry<V>>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        of<K>(...arg0: K[]): Internal.ObjectSet<K>;
        removeIf(arg0: Internal.Predicate_<Internal.Long2ObjectMap$Entry<V>>): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        fastForEach(arg0: Internal.Consumer_<Internal.Long2ObjectMap$Entry<V>>): void;
        abstract fastIterator(arg0: Internal.Long2ObjectMap$Entry_<V>): Internal.ObjectBidirectionalIterator<Internal.Long2ObjectMap$Entry<V>>;
        tailSet(arg0: any): Internal.SortedSet<any>;
        of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectSet<K>;
        abstract isEmpty(): boolean;
        addFirst(arg0: Internal.Long2ObjectMap$Entry_<V>): void;
        abstract comparator(): Internal.Comparator<Internal.Long2ObjectMap$Entry<V>>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract last(): Internal.Long2ObjectMap$Entry<V>;
        headSet(arg0: any): Internal.SortedSet<any>;
        getFirst(): Internal.Long2ObjectMap$Entry<V>;
        abstract add(arg0: Internal.Long2ObjectMap$Entry_<V>): boolean;
        removeFirst(): Internal.Long2ObjectMap$Entry<V>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        reversed(): Internal.SequencedSet<any>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        "of(java.lang.Object[])"<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract toArray(): any[];
        abstract size(): number;
        abstract hashCode(): number;
        abstract clear(): void;
        of<K>(arg0: K): Internal.ObjectSet<K>;
        abstract equals(arg0: any): boolean;
        abstract first(): Internal.Long2ObjectMap$Entry<V>;
        parallelStream(): Internal.Stream<Internal.Long2ObjectMap$Entry<V>>;
        get last(): Internal.Long2ObjectMap$Entry<V>
        get empty(): boolean
        get first(): Internal.Long2ObjectMap$Entry<V>
    }
    type Long2ObjectSortedMap$FastSortedEntrySet_<V> = Long2ObjectSortedMap$FastSortedEntrySet<V>;
    class SmithingTransformRecipe$Serializer implements Internal.RecipeSerializer<Internal.SmithingTransformRecipe> {
        constructor()
        getClass(): typeof any;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SmithingTransformRecipe_): void;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.SmithingTransformRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.SmithingTransformRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SmithingTransformRecipe_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type SmithingTransformRecipe$Serializer_ = SmithingTransformRecipe$Serializer;
    class TabSet implements Internal.Serializable {
        constructor(arg0: Internal.TabStop_[])
        getClass(): typeof any;
        toString(): string;
        getTabCount(): number;
        notifyAll(): void;
        getTabIndexAfter(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTab(arg0: number): Internal.TabStop;
        hashCode(): number;
        getTabAfter(arg0: number): Internal.TabStop;
        wait(): void;
        getTabIndex(arg0: Internal.TabStop_): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get tabCount(): number
    }
    type TabSet_ = TabSet;
    class UpwardsBranchingTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.IntProvider_, arg4: number, arg5: Internal.IntProvider_, arg6: Internal.HolderSet_<Internal.Block>)
        placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        getClass(): typeof any;
        hashCode(): number;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.UpwardsBranchingTrunkPlacer>;
    }
    type UpwardsBranchingTrunkPlacer_ = UpwardsBranchingTrunkPlacer;
    interface Promise <V> extends io.netty.util.concurrent.Future<V> {
        abstract isSuccess(): boolean;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract syncUninterruptibly(): this;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract awaitUninterruptibly(): this;
        abstract cause(): Internal.Throwable;
        abstract get(): V;
        abstract sync(): this;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract setUncancellable(): boolean;
        abstract trySuccess(arg0: V): boolean;
        exceptionNow(): Internal.Throwable;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        state(): Internal.Future$State;
        resultNow(): V;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract setSuccess(arg0: V): this;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract await(): this;
        abstract getNow(): V;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract isCancellable(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        get success(): boolean
        set failure(arg0: Internal.Throwable_)
        get cancelled(): boolean
        set success(arg0: V)
        get done(): boolean
        get now(): V
        get cancellable(): boolean
    }
    type Promise_<V> = Promise<V>;
    abstract class TopLevelElement extends icyllis.arc3d.compiler.tree.Node {
        getClass(): typeof any;
        getEndOffset(): number;
        abstract toString(): string;
        notifyAll(): void;
        abstract getKind(): Internal.Node$ElementKind;
        abstract accept(arg0: Internal.TreeVisitor_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get endOffset(): number
        get kind(): Internal.Node$ElementKind
        get startOffset(): number
    }
    type TopLevelElement_ = TopLevelElement;
    class FloatListListEntry$FloatListCell extends Internal.AbstractTextFieldListListEntry$AbstractTextFieldListCell<number, Internal.FloatListListEntry$FloatListCell, Internal.FloatListListEntry> {
        constructor(value: number, listListEntry: Internal.FloatListListEntry_)
        charTyped(arg0: string, arg1: number): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        getValue(): number;
        getCellHeight(): number;
        setFocused(arg0: boolean): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        setErrorSupplier(errorSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component>>): void;
        setFocused(arg0: Internal.GuiEventListener_): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isRequiresRestart(): boolean;
        getConfigError(): Internal.Optional<net.minecraft.network.chat.Component>;
        render(graphics: Internal.GuiGraphics_, index: number, y: number, x: number, entryWidth: number, entryHeight: number, mouseX: number, mouseY: number, isSelected: boolean, delta: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getFocused(): Internal.GuiEventListener;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        isEdited(): boolean;
        getError(): Internal.Optional<net.minecraft.network.chat.Component>;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        toString(): string;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        updateSelected(isSelected: boolean): void;
        "setFocused(boolean)"(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        onAdd(): void;
        getPreferredTextColor(): number;
        hashCode(): number;
        setDragging(arg0: boolean): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        updateNarration(narrationElementOutput: Internal.NarrationElementOutput_): void;
        onDelete(): void;
        wait(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        wait(arg0: number): void;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        equals(arg0: any): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        get class(): typeof any
        get focused(): boolean
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        get value(): number
        get cellHeight(): number
        set focused(arg0: boolean)
        get active(): boolean
        get tabOrderGroup(): number
        set errorSupplier(errorSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component>>)
        set focused(arg0: Internal.GuiEventListener_)
        get requiresRestart(): boolean
        get configError(): Internal.Optional<net.minecraft.network.chat.Component>
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
        get edited(): boolean
        get error(): Internal.Optional<net.minecraft.network.chat.Component>
        set "focused(boolean)"(arg0: boolean)
        get preferredTextColor(): number
        set dragging(arg0: boolean)
        get currentFocusPath(): Internal.ComponentPath
        get dragging(): boolean
    }
    type FloatListListEntry$FloatListCell_ = FloatListListEntry$FloatListCell;
    interface LongComparator extends Internal.Comparator<number> {
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        "thenComparing(it.unimi.dsi.fastutil.longs.LongComparator)"(arg0: Internal.LongComparator_): this;
        thenComparing(arg0: Internal.LongComparator_): this;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        reversed(): this;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        abstract compare(arg0: number, arg1: number): number;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        abstract "compare(long,long)"(arg0: number, arg1: number): number;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        "thenComparing(java.util.function.Function)"<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        /**
         * @deprecated
        */
        "compare(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): number;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        "thenComparing(java.util.Comparator)"(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        /**
         * @deprecated
        */
        "compare(java.lang.Long,java.lang.Long)"(arg0: number, arg1: number): number;
    }
    type LongComparator_ = LongComparator;
    interface DisableableWidget {
        abstract getRequirement(): Internal.Requirement;
        abstract setRequirement(arg0: Internal.Requirement_): void;
        abstract isEnabled(): boolean;
        get requirement(): Internal.Requirement
        set requirement(arg0: Internal.Requirement_)
        get enabled(): boolean
    }
    type DisableableWidget_ = DisableableWidget;
    class UniformFloat extends Internal.FloatProvider {
        sample(arg0: Internal.RandomSource_): number;
        getClass(): typeof any;
        getMinValue(): number;
        toString(): string;
        getMaxValue(): number;
        notifyAll(): void;
        notify(): void;
        static codec(arg0: number, arg1: number): Internal.Codec<Internal.FloatProvider>;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static of(arg0: number, arg1: number): Internal.UniformFloat;
        getType(): Internal.FloatProviderType<any>;
        get class(): typeof any
        get minValue(): number
        get maxValue(): number
        get type(): Internal.FloatProviderType<any>
        static readonly CODEC: Internal.Codec<Internal.UniformFloat>;
    }
    type UniformFloat_ = UniformFloat;
    interface IJeiAnvilRecipe {
        abstract getLeftInputs(): Internal.List<Internal.ItemStack>;
        abstract getOutputs(): Internal.List<Internal.ItemStack>;
        abstract getUid(): ResourceLocation;
        abstract getRightInputs(): Internal.List<Internal.ItemStack>;
        get leftInputs(): Internal.List<Internal.ItemStack>
        get outputs(): Internal.List<Internal.ItemStack>
        get uid(): ResourceLocation
        get rightInputs(): Internal.List<Internal.ItemStack>
    }
    type IJeiAnvilRecipe_ = IJeiAnvilRecipe;
    class MachineModelBuilder$PartialState <B extends Internal.ModelBuilder<B>> implements Internal.Predicate<Internal.MachineRenderState> {
        or(arg0: Internal.Predicate_<Internal.MachineRenderState>): Internal.Predicate<Internal.MachineRenderState>;
        getClass(): typeof any;
        static comparingByProperties(): Internal.Comparator<Internal.MachineModelBuilder$PartialState<any>>;
        setModel(arg0: Internal.ModelFile_): Internal.MachineModelBuilder<B>;
        "test(com.gregtechceu.gtceu.client.model.machine.MachineRenderState)"(arg0: Internal.MachineRenderState_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getOwner(): Internal.MachineDefinition;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        test(arg0: any): boolean;
        addModels(...arg0: Internal.ConfiguredModel_[]): this;
        test(arg0: Internal.MachineRenderState_): boolean;
        "test(java.lang.Object)"(arg0: any): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        and(arg0: Internal.Predicate_<Internal.MachineRenderState>): Internal.Predicate<Internal.MachineRenderState>;
        toString(): string;
        setModels(...arg0: Internal.ConfiguredModel_[]): Internal.MachineModelBuilder<B>;
        getSetStates(): Internal.SortedMap<Internal.Property<any>, Internal.Comparable<any>>;
        notifyAll(): void;
        negate(): Internal.Predicate<Internal.MachineRenderState>;
        hashCode(): number;
        "with"<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>, arg1: T): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set model(arg0: Internal.ModelFile_)
        get owner(): Internal.MachineDefinition
        set models(...arg0: Internal.ConfiguredModel_[])
        get setStates(): Internal.SortedMap<Internal.Property<any>, Internal.Comparable<any>>
    }
    type MachineModelBuilder$PartialState_<B extends Internal.ModelBuilder<B>> = MachineModelBuilder$PartialState<B>;
    class MatterCannonAmmo implements Internal.Recipe<net.minecraft.world.Container> {
        constructor(arg0: ResourceLocation_, arg1: Internal.Ingredient_, arg2: number)
        getClass(): typeof any;
        getAmmo(): Internal.Ingredient;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        static ammo(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.TagKey_<Internal.Item>, arg3: number): void;
        static "ammo(java.util.function.Consumer,net.minecraft.resources.ResourceLocation,net.minecraft.tags.TagKey,float)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.TagKey_<Internal.Item>, arg3: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "ammo(java.util.function.Consumer,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.crafting.Ingredient,float)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.Ingredient_, arg3: number): void;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getWeight(): number;
        getId(): ResourceLocation;
        static ammo(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.Ingredient_, arg3: number): void;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static ammo(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.ItemLike_, arg3: number): void;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        static "ammo(java.util.function.Consumer,net.minecraft.resources.ResourceLocation,net.minecraft.world.level.ItemLike,float)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_, arg2: Internal.ItemLike_, arg3: number): void;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get ammo(): Internal.Ingredient
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get weight(): number
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        static readonly TYPE: (Internal.RecipeType$2) & (Internal.RecipeType<Internal.MatterCannonAmmo>);
        static readonly TYPE_ID: (ResourceLocation) & (ResourceLocation);
    }
    type MatterCannonAmmo_ = MatterCannonAmmo;
    interface IBlockState {
        abstract isCacheInvalid(): boolean;
        abstract clearCache(): void;
        get cacheInvalid(): boolean
    }
    type IBlockState_ = IBlockState;
    interface ISidedStrictEnergyHandler extends Internal.IStrictEnergyHandler {
        abstract setEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_): void;
        abstract extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FloatingLong;
        "insertEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        getEnergyContainerCount(): number;
        setEnergy(arg0: number, arg1: Internal.FloatingLong_): void;
        "insertEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        abstract getEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        abstract insertEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FloatingLong;
        insertEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        "extractEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        getMaxEnergy(arg0: number): Internal.FloatingLong;
        abstract getMaxEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Action_): Internal.FloatingLong;
        "extractEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        abstract getNeededEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        abstract getEnergyContainerCount(arg0: Internal.Direction_): number;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Action_): Internal.FloatingLong;
        getEnergy(arg0: number): Internal.FloatingLong;
        getNeededEnergy(arg0: number): Internal.FloatingLong;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        getEnergySideFor(): Internal.Direction;
        get energyContainerCount(): number
        get energySideFor(): Internal.Direction
    }
    type ISidedStrictEnergyHandler_ = ISidedStrictEnergyHandler;
    class WeepingVinesPlantBlock extends Internal.GrowingPlantBodyBlock {
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
        gtceu$getGrowthDirection(): Internal.Direction;
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
        "getStateForPlacement(net.minecraft.world.level.LevelAccessor)"(arg0: Internal.LevelAccessor_): Internal.BlockState;
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
        gtceu$getHeadBlock(): Internal.GrowingPlantHeadBlock;
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
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
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
        gtceu$getBodyBlock(): Internal.Block;
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
        "getStateForPlacement(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
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
        static readonly SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type WeepingVinesPlantBlock_ = WeepingVinesPlantBlock;
    interface RegistryAccess$Frozen extends Internal.RegistryAccess {
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        allRegistriesLifecycle(): Internal.Lifecycle;
        create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        abstract registry<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.Registry<E>>;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        abstract registries(): Internal.Stream<Internal.RegistryAccess$RegistryEntry<any>>;
        freeze(): this;
        asGetterLookup(): Internal.HolderGetter$Provider;
        fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): this;
    }
    type RegistryAccess$Frozen_ = RegistryAccess$Frozen;
    class GadgetCopyPaste extends Internal.BaseGadget {
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
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        rotateModes(arg0: Internal.ItemStack_): ResourceLocation;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        static getHitPos(arg0: Internal.ItemActionContext_): BlockPos;
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
        gadgetTarget(): Internal.GadgetTarget;
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
        getEnergyMax(): number;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        undo(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ItemStack_): void;
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
        canUndo(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ItemStack_): boolean;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        bindToInventory(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ItemStack_, arg3: Internal.BlockHitResult_): boolean;
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
        getEnergyCost(): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getGadget(arg0: Internal.Player_): Internal.ItemStack;
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
        buildAndStore(arg0: Internal.ItemActionContext_, arg1: Internal.ItemStack_): void;
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
        get energyMax(): number
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
        get energyCost(): number
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type GadgetCopyPaste_ = GadgetCopyPaste;
    class LinkedBlockingDeque <E> extends Internal.AbstractQueue<E> implements Internal.BlockingDeque<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        constructor(arg0: number)
        addLast(arg0: E): void;
        getLast(): E;
        takeFirst(): E;
        remove(): E;
        notify(): void;
        poll(): E;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        offerLast(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        putFirst(arg0: E): void;
        putLast(arg0: E): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: Internal.Collection_<E>): boolean;
        descendingIterator(): Internal.Iterator<E>;
        peek(): E;
        addFirst(arg0: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        remove(arg0: any): boolean;
        offer(arg0: E): boolean;
        offer(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        pop(): E;
        offerFirst(arg0: E, arg1: number, arg2: Internal.TimeUnit_): boolean;
        iterator(): Internal.Iterator<E>;
        pollFirst(): E;
        stream(): Internal.Stream<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        push(arg0: E): void;
        removeLast(): E;
        takeLast(): E;
        drainTo(arg0: Internal.Collection_<E>, arg1: number): number;
        pollLast(): E;
        getClass(): typeof any;
        peekLast(): E;
        add(arg0: E): boolean;
        element(): E;
        removeFirst(): E;
        pollFirst(arg0: number, arg1: Internal.TimeUnit_): E;
        drainTo(arg0: Internal.Collection_<E>): number;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        poll(arg0: number, arg1: Internal.TimeUnit_): E;
        wait(arg0: number, arg1: number): void;
        offerFirst(arg0: E): boolean;
        reversed(): Internal.Deque<E>;
        take(): E;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        pollLast(arg0: number, arg1: Internal.TimeUnit_): E;
        removeFirstOccurrence(arg0: any): boolean;
        contains(arg0: any): boolean;
        remainingCapacity(): number;
        toString(): string;
        put(arg0: E): void;
        notifyAll(): void;
        "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        toArray(): any[];
        getFirst(): E;
        offerLast(arg0: E): boolean;
        size(): number;
        abstract hashCode(): number;
        peekFirst(): E;
        removeLastOccurrence(arg0: any): boolean;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        get last(): E
        get class(): typeof any
        get empty(): boolean
        get first(): E
    }
    type LinkedBlockingDeque_<E> = LinkedBlockingDeque<E>;
    class GameProfileCache {
        constructor(arg0: Internal.GameProfileRepository_, arg1: Internal.File_)
        getClass(): typeof any;
        add(arg0: Internal.GameProfile_): void;
        toString(): string;
        "get(java.util.UUID)"(arg0: Internal.UUID_): Internal.Optional<Internal.GameProfile>;
        get(arg0: string): Internal.Optional<Internal.GameProfile>;
        notifyAll(): void;
        clearExecutor(): void;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        get(arg0: Internal.UUID_): Internal.Optional<Internal.GameProfile>;
        setExecutor(arg0: Internal.Executor_): void;
        getAsync(arg0: string, arg1: Internal.Consumer_<Internal.Optional<Internal.GameProfile>>): void;
        hashCode(): number;
        wait(): void;
        static setUsesAuthentication(arg0: boolean): void;
        "get(java.lang.String)"(arg0: string): Internal.Optional<Internal.GameProfile>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        load(): Internal.List<Internal.GameProfileCache$GameProfileInfo>;
        get class(): typeof any
        set executor(arg0: Internal.Executor_)
        set usesAuthentication(arg0: boolean)
    }
    type GameProfileCache_ = GameProfileCache;
    abstract class TileEntityTransmitter extends Internal.CapabilityTileEntity implements Internal.IAlloyInteraction, Internal.ProxyConfigurable$ISidedConfigurable {
        constructor(blockProvider: Internal.IBlockProvider_, pos: BlockPos_, state: Internal.BlockState_)
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        sideChanged(side: Internal.Direction_, old: Internal.ConnectionType_, type: Internal.ConnectionType_): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(nbt: Internal.CompoundTag_): void;
        setForceUpdate(): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction)"(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getReducedUpdateTag(): Internal.CompoundTag;
        isOutOfCamera(): boolean;
        "getUpdatePacket()"(): Internal.Packet<any>;
        getTransmitter(): Internal.Transmitter<any, any, any>;
        onSneakRightClick(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        setRemoved(): void;
        onNeighborTileChange(side: Internal.Direction_): void;
        invalidateCapability(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        onSneakRightClick(player: Internal.Player_): Internal.InteractionResult;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction)"(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        onAdded(): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        markDirtyComparator(): void;
        getClass(): typeof any;
        sendUpdatePacket(): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        isLoaded(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        abstract getTransmitterType(): Internal.TransmitterType;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        getTileChunk(): Internal.Chunk3D;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getTileWorld(): Internal.Level;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        invalidateCachedCapabilities(): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        handleUpdatePacket(tag: Internal.CompoundTag_): void;
        handleUpdateTag(tag: Internal.CompoundTag_): void;
        getSideLookingAt(player: Internal.Player_): Internal.Direction;
        getUpdateTag(): Internal.CompoundTag;
        setLevel(world: Internal.Level_): void;
        notify(): void;
        chunkAccessibilityChange(loaded: boolean): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        static tickServer(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, transmitter: Internal.TileEntityTransmitter_): void;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction[])"(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        markForSave(): void;
        invalidateCaps(): void;
        getTilePos(): BlockPos;
        getTileCoord(): Internal.Coord4D;
        getBlockState(): Internal.BlockState;
        getSideLookingAt(player: Internal.Player_, fallback: Internal.Direction_): Internal.Direction;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        sendUpdatePacket(tracking: Internal.BlockEntity_): void;
        m_183515_(nbtTags: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(capability: Internal.Capability_<T>, side: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getCollisionBoxes(): Internal.List<Internal.VoxelShape>;
        setOutOfCamera(value: boolean): void;
        onRightClick(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onRightClick(player: Internal.Player_): Internal.InteractionResult;
        onlyOpCanSetNbt(): boolean;
        isRemote(): boolean;
        serializeNBT(): Internal.Tag;
        onNeighborBlockChange(side: Internal.Direction_): void;
        onDataPacket(net: Internal.Connection_, pkt: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction[])"(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        onAlloyInteraction(player: Internal.Player_, stack: Internal.ItemStack_, tier: Internal.AlloyTier_): void;
        invalidateCapability(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        redstoneChanged(powered: boolean): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        isForcedVisible(): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        blockRemoved(): void;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get reducedUpdateTag(): Internal.CompoundTag
        get outOfCamera(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get transmitter(): Internal.Transmitter<any, any, any>
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get loaded(): boolean
        get transmitterType(): Internal.TransmitterType
        get updatePacket(): Internal.Packet<any>
        get tileChunk(): Internal.Chunk3D
        get persistentData(): Internal.CompoundTag
        get tileWorld(): Internal.Level
        get updateTag(): Internal.CompoundTag
        set level(world: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get tilePos(): BlockPos
        get tileCoord(): Internal.Coord4D
        get blockState(): Internal.BlockState
        get collisionBoxes(): Internal.List<Internal.VoxelShape>
        set outOfCamera(value: boolean)
        get level(): Internal.Level
        get remote(): boolean
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get forcedVisible(): boolean
        get modelData(): Internal.ModelData
        static readonly TRANSMITTER_PROPERTY: Internal.ModelProperty<Internal.TransmitterModelData>;
    }
    type TileEntityTransmitter_ = TileEntityTransmitter;
    class FontFamily {
        constructor(font: icyllis.modernui.graphics.text.Font_)
        getClass(): typeof any;
        static createFamilies(file: Internal.File_, register: boolean): Internal.FontFamily[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static getSystemFontAliases(): Internal.Map<string, string>;
        isColorEmojiFamily(): boolean;
        static createFamilies(stream: Internal.InputStream_, register: boolean): Internal.FontFamily[];
        static getSystemFontWithAlias(name: string): Internal.FontFamily;
        static "createFamilies(java.io.InputStream,boolean)"(stream: Internal.InputStream_, register: boolean): Internal.FontFamily[];
        static "createFamily(java.io.File,boolean)"(file: Internal.File_, register: boolean): Internal.FontFamily;
        toString(): string;
        static createFamily(file: Internal.File_, register: boolean): Internal.FontFamily;
        notifyAll(): void;
        getFamilyName(): string;
        isEastAsianFamily(): boolean;
        hasGlyph(ch: number, vs: number): boolean;
        hashCode(): number;
        wait(): void;
        hasGlyph(ch: number): boolean;
        getFamilyName(locale: Internal.Locale_): string;
        wait(arg0: number): void;
        static "createFamily(java.io.InputStream,boolean)"(stream: Internal.InputStream_, register: boolean): Internal.FontFamily;
        getClosestMatch(style: number): icyllis.modernui.graphics.text.Font;
        equals(o: any): boolean;
        static createFamily(stream: Internal.InputStream_, register: boolean): Internal.FontFamily;
        static getSystemFontMap(): Internal.Map<string, Internal.FontFamily>;
        static "createFamilies(java.io.File,boolean)"(file: Internal.File_, register: boolean): Internal.FontFamily[];
        get class(): typeof any
        get systemFontAliases(): Internal.Map<string, string>
        get colorEmojiFamily(): boolean
        get familyName(): string
        get eastAsianFamily(): boolean
        get systemFontMap(): Internal.Map<string, Internal.FontFamily>
        static readonly SANS_SERIF: (Internal.FontFamily) & (Internal.FontFamily);
        static readonly SERIF: (Internal.FontFamily) & (Internal.FontFamily);
        static readonly MONOSPACED: (Internal.FontFamily) & (Internal.FontFamily);
    }
    type FontFamily_ = FontFamily;
    abstract class SocketImpl implements Internal.SocketOptions {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        abstract setOption(arg0: number, arg1: any): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract getOption(arg0: number): any;
        get class(): typeof any
    }
    type SocketImpl_ = SocketImpl;
    class IllegalStateException extends Internal.RuntimeException {
        constructor()
        constructor(arg0: string, arg1: Internal.Throwable_)
        constructor(arg0: Internal.Throwable_)
        constructor(arg0: string)
        getClass(): typeof any;
        "printStackTrace(java.io.PrintStream)"(arg0: Internal.PrintStream_): void;
        toString(): string;
        getMessage(): string;
        notifyAll(): void;
        "printStackTrace(java.io.PrintWriter)"(arg0: Internal.PrintWriter_): void;
        getCause(): Internal.Throwable;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStackTrace(): Internal.StackTraceElement[];
        printStackTrace(arg0: Internal.PrintWriter_): void;
        hashCode(): number;
        getSuppressed(): Internal.Throwable[];
        fillInStackTrace(): Internal.Throwable;
        addSuppressed(arg0: Internal.Throwable_): void;
        wait(): void;
        printStackTrace(): void;
        initCause(arg0: Internal.Throwable_): Internal.Throwable;
        wait(arg0: number): void;
        setStackTrace(arg0: Internal.StackTraceElement_[]): void;
        printStackTrace(arg0: Internal.PrintStream_): void;
        equals(arg0: any): boolean;
        getLocalizedMessage(): string;
        get class(): typeof any
        get message(): string
        get cause(): Internal.Throwable
        get stackTrace(): Internal.StackTraceElement[]
        get suppressed(): Internal.Throwable[]
        set stackTrace(arg0: Internal.StackTraceElement_[])
        get localizedMessage(): string
    }
    type IllegalStateException_ = IllegalStateException;
    class OrderedCompoundTag extends Internal.CompoundTag {
        constructor()
        constructor(map: Internal.Map_<string, Internal.Tag>)
        getLong(arg0: string): number;
        getLongArray(arg0: string): number[];
        merge(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getFloat(arg0: string): number;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        putShort(arg0: string, arg1: number): void;
        putLongArray(arg0: string, arg1: number[]): void;
        notify(): void;
        getTagType(arg0: string): number;
        contains(arg0: string): boolean;
        sizeInBytes(): number;
        putLongArray(arg0: string, arg1: Internal.List_<number>): void;
        getBoolean(arg0: string): boolean;
        write(dataOutput: Internal.DataOutput_): void;
        "putLongArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        getShort(arg0: string): number;
        getCompound(arg0: string): Internal.CompoundTag;
        accept(arg0: Internal.TagVisitor_): void;
        getAllKeys(): Internal.Set<string>;
        getUUID(arg0: string): Internal.UUID;
        putByteArray(arg0: string, arg1: number[]): void;
        "putIntArray(java.lang.String,int[])"(arg0: string, arg1: number[]): void;
        copy(): Internal.Tag;
        putFloat(arg0: string, arg1: number): void;
        getDouble(arg0: string): number;
        wait(): void;
        getString(arg0: string): string;
        remove(arg0: string): void;
        getType(): Internal.TagType<Internal.CompoundTag>;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        getClass(): typeof any;
        "putByteArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        put(arg0: string, arg1: Internal.Tag_): Internal.Tag;
        putUUID(arg0: string, arg1: Internal.UUID_): void;
        getByteArray(arg0: string): number[];
        getInt(arg0: string): number;
        putByte(arg0: string, arg1: number): void;
        isEmpty(): boolean;
        putIntArray(arg0: string, arg1: number[]): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        get(arg0: string): Internal.Tag;
        putLong(arg0: string, arg1: number): void;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        putString(arg0: string, arg1: string): void;
        putByteArray(arg0: string, arg1: Internal.List_<number>): void;
        "putLongArray(java.lang.String,long[])"(arg0: string, arg1: number[]): void;
        getId(): number;
        putDouble(arg0: string, arg1: number): void;
        "putByteArray(java.lang.String,byte[])"(arg0: string, arg1: number[]): void;
        putIntArray(arg0: string, arg1: Internal.List_<number>): void;
        getList(arg0: string, arg1: number): Internal.ListTag;
        toString(): string;
        getIntArray(arg0: string): number[];
        notifyAll(): void;
        getByte(arg0: string): number;
        "putIntArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        hashCode(): number;
        size(): number;
        getAsString(): string;
        hasUUID(arg0: string): boolean;
        wait(arg0: number): void;
        putBoolean(arg0: string, arg1: boolean): void;
        putInt(arg0: string, arg1: number): void;
        contains(arg0: string, arg1: number): boolean;
        equals(arg0: any): boolean;
        get allKeys(): Internal.Set<string>
        get type(): Internal.TagType<Internal.CompoundTag>
        get class(): typeof any
        get empty(): boolean
        get id(): number
        get asString(): string
        readonly tagMap: Internal.Map<string, Internal.Tag>;
    }
    type OrderedCompoundTag_ = OrderedCompoundTag;
    class CraftingComponentsEventJS$ComponentWrapper extends CraftingComponent {
        getClass(): typeof any;
        static of(arg0: string, arg1: TagPrefix_, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material_): CraftingComponent;
        add(arg0: number, arg1: TagPrefix_, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material_): CraftingComponent;
        toString(): string;
        static of(arg0: string, arg1: any): Internal.CraftingComponentsEventJS$ComponentWrapper;
        notifyAll(): void;
        static get(arg0: string): CraftingComponent;
        "get(int)"(arg0: number): any;
        addMaterialEntry(arg0: number, arg1: TagPrefix_, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material_): this;
        notify(): void;
        get(arg0: number): any;
        wait(arg0: number, arg1: number): void;
        addItem(arg0: number, arg1: Internal.ItemStack_): this;
        addTag(arg0: number, arg1: ResourceLocation_): this;
        remove(arg0: number): void;
        setFallback(arg0: any): void;
        hashCode(): number;
        static "get(java.lang.String)"(arg0: string): CraftingComponent;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        add(arg0: number, arg1: any): CraftingComponent;
        addMaterialEntry(arg0: number, arg1: MaterialEntry_): this;
        get class(): typeof any
        set fallback(arg0: any)
    }
    type CraftingComponentsEventJS$ComponentWrapper_ = CraftingComponentsEventJS$ComponentWrapper;
    class RenderStateShard$OutputStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
        getClass(): typeof any;
        clearRenderState(): void;
        hashCode(): number;
        toString(): string;
        setupRenderState(): void;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type RenderStateShard$OutputStateShard_ = RenderStateShard$OutputStateShard;
    interface ServerPlayerConnection {
        abstract send(arg0: Internal.Packet_<any>): void;
        abstract getPlayer(): Internal.ServerPlayer;
        get player(): Internal.ServerPlayer
    }
    type ServerPlayerConnection_ = ServerPlayerConnection;
    class CraftingService implements Internal.IGridServiceProvider, Internal.ICraftingService {
        constructor(arg0: Internal.IGrid_, arg1: Internal.IStorageService_, arg2: Internal.IEnergyService_)
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onSplit(arg0: Internal.IGridStorage_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        addNode(arg0: Internal.IGridNode_): void;
        onServerStartTick(): void;
        notify(): void;
        onLevelEndTick(arg0: Internal.Level_): void;
        wait(arg0: number, arg1: number): void;
        removeNode(arg0: Internal.IGridNode_): void;
        onLevelStartTick(arg0: Internal.Level_): void;
        canEmitFor(arg0: Internal.AEKey_): boolean;
        addNode(arg0: Internal.IGridNode_, arg1: Internal.CompoundTag_): void;
        addLink(arg0: Internal.CraftingLink_): void;
        saveNodeData(arg0: Internal.IGridNode_, arg1: Internal.CompoundTag_): void;
        getCraftingFor(arg0: Internal.AEKey_): Internal.Collection<Internal.IPatternDetails>;
        isRequestingAny(): boolean;
        refreshNodeCraftingProvider(arg0: Internal.IGridNode_): void;
        hasCpu(arg0: Internal.ICraftingCPU_): boolean;
        getCraftables(arg0: Internal.AEKeyFilter_): Internal.Set<Internal.AEKey>;
        submitJob(arg0: Internal.ICraftingPlan_, arg1: Internal.ICraftingRequester_, arg2: Internal.ICraftingCPU_, arg3: boolean, arg4: Internal.IActionSource_): Internal.ICraftingSubmitResult;
        toString(): string;
        getFuzzyCraftable(arg0: Internal.AEKey_, arg1: Internal.AEKeyFilter_): Internal.AEKey;
        getCpus(): Internal.ImmutableSet<Internal.ICraftingCPU>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onJoin(arg0: Internal.IGridStorage_): void;
        notifyAll(): void;
        insertIntoCpus(arg0: Internal.AEKey_, arg1: number, arg2: Internal.Actionable_): number;
        getProviders(arg0: Internal.IPatternDetails_): Internal.Iterable<Internal.ICraftingProvider>;
        onServerEndTick(): void;
        hashCode(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        populateGridStorage(arg0: Internal.IGridStorage_): void;
        getRequestedAmount(arg0: Internal.AEKey_): number;
        isCraftable(arg0: Internal.AEKey_): boolean;
        wait(): void;
        isRequesting(arg0: Internal.AEKey_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        beginCraftingCalculation(arg0: Internal.Level_, arg1: Internal.ICraftingSimulationRequester_, arg2: Internal.AEKey_, arg3: number, arg4: Internal.CalculationStrategy_): Internal.Future<Internal.ICraftingPlan>;
        get class(): typeof any
        get requestingAny(): boolean
        get cpus(): Internal.ImmutableSet<Internal.ICraftingCPU>
    }
    type CraftingService_ = CraftingService;
    class ArrowDamageEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
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
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type ArrowDamageEnchantment_ = ArrowDamageEnchantment;
    class GomokuPart extends Internal.Enum<Internal.GomokuPart> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf(arg0: string): Internal.GomokuPart;
        getSerializedName(): string;
        "compareTo(com.github.tartaricacid.touhoulittlemaid.block.properties.GomokuPart)"(arg0: Internal.GomokuPart_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPosY(): number;
        compareTo(arg0: any): number;
        getPosX(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getDeclaringClass(): typeof Internal.GomokuPart;
        isCenter(): boolean;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        static values(): Internal.GomokuPart[];
        toString(): string;
        notifyAll(): void;
        static getPartByPos(arg0: number, arg1: number): Internal.GomokuPart;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        compareTo(arg0: Internal.GomokuPart_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.GomokuPart>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get posY(): number
        get posX(): number
        get declaringClass(): typeof Internal.GomokuPart
        get center(): boolean
        static readonly LEFT_UP: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly LEFT_CENTER: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly LEFT_DOWN: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly DOWN: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly UP: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly RIGHT_CENTER: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly RIGHT_UP: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly RIGHT_DOWN: (Internal.GomokuPart) & (Internal.GomokuPart);
        static readonly CENTER: (Internal.GomokuPart) & (Internal.GomokuPart);
    }
    type GomokuPart_ = "up" | "down" | "right_center" | "center" | "left_center" | "left_up" | GomokuPart | "right_down" | "left_down" | "right_up";
    class CoralTreeFeature extends Internal.CoralFeature {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type CoralTreeFeature_ = CoralTreeFeature;
    class FMLClientSetupEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "enqueueWork(java.util.function.Supplier)"<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        description(): string;
        getResult(): Internal.Event$Result;
        toString(): string;
        enqueueWork<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        notifyAll(): void;
        "enqueueWork(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
    }
    type FMLClientSetupEvent_ = FMLClientSetupEvent;
    class Pair$Mu <S> implements Internal.K1 {
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
    type Pair$Mu_<S> = Pair$Mu<S>;
    class DripstoneClusterConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_, arg3: number, arg4: number, arg5: Internal.IntProvider_, arg6: Internal.FloatProvider_, arg7: Internal.FloatProvider_, arg8: number, arg9: number, arg10: number)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly heightDeviation: number;
        readonly maxDistanceFromCenterAffectingHeightBias: number;
        readonly maxStalagmiteStalactiteHeightDiff: number;
        readonly wetness: Internal.FloatProvider;
        readonly floorToCeilingSearchRange: number;
        readonly height: Internal.IntProvider;
        readonly maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number;
        readonly dripstoneBlockLayerThickness: Internal.IntProvider;
        readonly density: Internal.FloatProvider;
        readonly chanceOfDripstoneColumnAtMaxDistanceFromCenter: number;
        static readonly CODEC: Internal.Codec<Internal.DripstoneClusterConfiguration>;
        readonly radius: Internal.IntProvider;
    }
    type DripstoneClusterConfiguration_ = DripstoneClusterConfiguration;
    class ItemArmoredJetpack extends Internal.ItemJetpack implements Internal.IAttributeRefresher {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(stack: Internal.ItemStack_, book: Internal.ItemStack_): boolean;
        static isModeItem(player: Internal.Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(stack: Internal.ItemStack_): number;
        static isModeItem(player: Internal.Player_, slotType: Internal.EquipmentSlot_): boolean;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        canUseJetpack(stack: Internal.ItemStack_): boolean;
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
        getJetpackMode(stack: Internal.ItemStack_): Internal.IJetpackItem$JetpackMode;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addCurioHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Internal.Player_, stack: Internal.ItemStack_): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        static getPlayerJetpackMode(player: Internal.Player_, mode: Internal.IJetpackItem$JetpackMode_, ascendingSupplier: Internal.BooleanSupplier_): Internal.IJetpackItem$JetpackMode;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        getScrollTextComponent(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        addHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Internal.Player_, stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(consumer: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        changeMode(player: Internal.Player_, stack: Internal.ItemStack_, shift: number, displayChange: Internal.IModeItem$DisplayChange_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        static displayModeChange(player: Internal.Player_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        supportsSlotType(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        static getPrimaryJetpack(entity: Internal.LivingEntity_): Internal.ItemStack;
        canApplyAtEnchantingTable(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot,boolean)"(player: Internal.Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(stack: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        setMode(stack: Internal.ItemStack_, mode: Internal.IJetpackItem$JetpackMode_): void;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        addDefault(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasGas(stack: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(stack: Internal.ItemStack_, entity: Internal.Entity_, slot: Internal.EquipmentSlot_, type: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        static handleJetpackMotion(player: Internal.Player_, mode: Internal.IJetpackItem$JetpackMode_, ascendingSupplier: Internal.BooleanSupplier_): boolean;
        getId(): string;
        isEnchantable(stack: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        addItems(tabOutput: Internal.CreativeModeTab$Output_): void;
        notify(): void;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        useJetpackFuel(stack: Internal.ItemStack_): void;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,boolean)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
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
        useGas(stack: Internal.ItemStack_, amount: number): Internal.GasStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        addToBuilder(builder: Internal.ImmutableMultimap$Builder_<Internal.Attribute, Internal.AttributeModifier>): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        static getActiveJetpack(entity: Internal.LivingEntity_): Internal.ItemStack;
        getMod(): string;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot)"(player: Internal.Player_, slotType: Internal.EquipmentSlot_): boolean;
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
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
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
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
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
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemArmoredJetpack_ = ItemArmoredJetpack;
    class IGridNodeListener$State extends Internal.Enum<Internal.IGridNodeListener$State> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.IGridNodeListener$State_): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.IGridNodeListener$State;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.IGridNodeListener$State>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.IGridNodeListener$State[];
        "compareTo(appeng.api.networking.IGridNodeListener$State)"(arg0: Internal.IGridNodeListener$State_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.IGridNodeListener$State;
        get class(): typeof any
        get declaringClass(): typeof Internal.IGridNodeListener$State
        static readonly CHANNEL: (Internal.IGridNodeListener$State) & (Internal.IGridNodeListener$State);
        static readonly GRID_BOOT: (Internal.IGridNodeListener$State) & (Internal.IGridNodeListener$State);
        static readonly POWER: (Internal.IGridNodeListener$State) & (Internal.IGridNodeListener$State);
    }
    type IGridNodeListener$State_ = IGridNodeListener$State | "power" | "channel" | "grid_boot";
    class BaseCoralPlantTypeBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
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
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type BaseCoralPlantTypeBlock_ = BaseCoralPlantTypeBlock;
    class HotbarManager {
        constructor(arg0: Internal.File_, arg1: Internal.DataFixer_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        get(arg0: number): Internal.Hotbar;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly NUM_HOTBAR_GROUPS: (9) & (number);
    }
    type HotbarManager_ = HotbarManager;
    class VillagerBabiesSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type VillagerBabiesSensor_ = VillagerBabiesSensor;
    interface TagPrefix$BlockConstructor {
        abstract create(arg0: Internal.BlockBehaviour$Properties_, arg1: TagPrefix_, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material_): Internal.Block;
        (arg0: Internal.BlockBehaviour$Properties, arg1: TagPrefix, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material): Internal.Block_;
    }
    type TagPrefix$BlockConstructor_ = TagPrefix$BlockConstructor | ((arg0: Internal.BlockBehaviour$Properties, arg1: TagPrefix, arg2: com.gregtechceu.gtceu.api.data.chemical.material.Material)=> Internal.Block_);
    class MusicManager implements Internal.IMixinMusicManager {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        stopPlaying(): void;
        notify(): void;
        stopPlaying(arg0: Internal.Music_): void;
        wait(arg0: number, arg1: number): void;
        isPlayingMusic(arg0: Internal.Music_): boolean;
        tick(): void;
        hashCode(): number;
        getCurrentMusic_FancyMenu(): Internal.SoundInstance;
        wait(): void;
        startPlaying(arg0: Internal.Music_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get currentMusic_FancyMenu(): Internal.SoundInstance
    }
    type MusicManager_ = MusicManager;
    class RedStoneOreBlock extends Internal.Block {
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
    type RedStoneOreBlock_ = RedStoneOreBlock;
    class SFMLParser$WithParenContext extends Internal.SFMLParser$WithClauseContext {
        constructor(arg0: Internal.SFMLParser$WithClauseContext_)
        toString(arg0: Internal.List_<string>): string;
        toInfoString(arg0: Internal.Parser_): string;
        /**
         * @deprecated
        */
        "addErrorNode(org.antlr.v4.runtime.Token)"(arg0: Internal.Token_): Internal.ErrorNode;
        toStringTree(arg0: Internal.Parser_): string;
        accept<T>(arg0: Internal.ParseTreeVisitor_<T>): T;
        toString(arg0: Internal.Recognizer_<any, any>, arg1: Internal.RuleContext_): string;
        notify(): void;
        getRuleIndex(): number;
        "toStringTree(java.util.List)"(arg0: Internal.List_<string>): string;
        toStringTree(): string;
        toStringTree(arg0: Internal.List_<string>): string;
        addChild(arg0: Internal.RuleContext_): Internal.RuleContext;
        RPAREN(): Internal.TerminalNode;
        addChild(arg0: Internal.TerminalNode_): Internal.TerminalNode;
        "copyFrom(org.antlr.v4.runtime.ParserRuleContext)"(arg0: Internal.ParserRuleContext_): void;
        "copyFrom(ca.teamdman.langs.SFMLParser$WithClauseContext)"(arg0: Internal.SFMLParser$WithClauseContext_): void;
        LPAREN(): Internal.TerminalNode;
        getParent(): Internal.ParserRuleContext;
        getToken(arg0: number, arg1: number): Internal.TerminalNode;
        "toString(org.antlr.v4.runtime.Recognizer)"(arg0: Internal.Recognizer_<any, any>): string;
        removeLastChild(): void;
        depth(): number;
        withClause(): Internal.SFMLParser$WithClauseContext;
        getTokens(arg0: number): Internal.List<Internal.TerminalNode>;
        getRuleContext(): Internal.RuleContext;
        "toString(org.antlr.v4.runtime.Recognizer,org.antlr.v4.runtime.RuleContext)"(arg0: Internal.Recognizer_<any, any>, arg1: Internal.RuleContext_): string;
        getChild(arg0: number): Internal.ParseTree;
        wait(): void;
        toString(arg0: Internal.List_<string>, arg1: Internal.RuleContext_): string;
        /**
         * @deprecated
        */
        "addChild(org.antlr.v4.runtime.Token)"(arg0: Internal.Token_): Internal.TerminalNode;
        getSourceInterval(): Internal.Interval;
        getClass(): typeof any;
        enterRule(arg0: Internal.ParseTreeListener_): void;
        getChild<T extends Internal.ParseTree>(arg0: T, arg1: number): T;
        getChildCount(): number;
        /**
         * @deprecated
        */
        addChild(arg0: Internal.Token_): Internal.TerminalNode;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        toString(arg0: Internal.Recognizer_<any, any>): string;
        getAltNumber(): number;
        "addChild(org.antlr.v4.runtime.tree.TerminalNode)"(arg0: Internal.TerminalNode_): Internal.TerminalNode;
        "addChild(org.antlr.v4.runtime.RuleContext)"(arg0: Internal.RuleContext_): Internal.RuleContext;
        "toString(java.util.List,org.antlr.v4.runtime.RuleContext)"(arg0: Internal.List_<string>, arg1: Internal.RuleContext_): string;
        "addErrorNode(org.antlr.v4.runtime.tree.ErrorNode)"(arg0: Internal.ErrorNode_): Internal.ErrorNode;
        copyFrom(arg0: Internal.SFMLParser$WithClauseContext_): void;
        setParent(arg0: Internal.RuleContext_): void;
        addAnyChild<T extends Internal.ParseTree>(arg0: T): T;
        getPayload(): Internal.RuleContext;
        setAltNumber(arg0: number): void;
        "toStringTree(org.antlr.v4.runtime.Parser)"(arg0: Internal.Parser_): string;
        getRuleContexts<T extends Internal.ParserRuleContext>(arg0: T): Internal.List<T>;
        toString(): string;
        notifyAll(): void;
        getStart(): Internal.Token;
        getText(): string;
        /**
         * @deprecated
        */
        addErrorNode(arg0: Internal.Token_): Internal.ErrorNode;
        getStop(): Internal.Token;
        exitRule(arg0: Internal.ParseTreeListener_): void;
        hashCode(): number;
        getRuleContext<T extends Internal.ParserRuleContext>(arg0: T, arg1: number): T;
        addErrorNode(arg0: Internal.ErrorNode_): Internal.ErrorNode;
        wait(arg0: number): void;
        copyFrom(arg0: Internal.ParserRuleContext_): void;
        equals(arg0: any): boolean;
        "toString(java.util.List)"(arg0: Internal.List_<string>): string;
        get ruleIndex(): number
        get parent(): Internal.ParserRuleContext
        get ruleContext(): Internal.RuleContext
        get sourceInterval(): Internal.Interval
        get class(): typeof any
        get childCount(): number
        get empty(): boolean
        get altNumber(): number
        set parent(arg0: Internal.RuleContext_)
        get payload(): Internal.RuleContext
        set altNumber(arg0: number)
        get start(): Internal.Token
        get text(): string
        get stop(): Internal.Token
    }
    type SFMLParser$WithParenContext_ = SFMLParser$WithParenContext;
    class GrowingPlantRender$GrowthMode extends Internal.Record {
        constructor(name: string, predicate: Internal.Predicate_<Internal.Block>, renderFunction: Internal.GrowingPlantRender$RenderFunction_)
        constructor(arg0: string, arg1: Internal.GrowingPlantRender$RenderFunction_)
        getClass(): typeof any;
        toString(): string;
        static ofIntegerProperty(arg0: string, arg1: Internal.IntegerProperty_): Internal.GrowingPlantRender$GrowthMode;
        notifyAll(): void;
        static ofIntegerProperty(arg0: string, arg1: Internal.IntegerProperty_, arg2: number, arg3: number): Internal.GrowingPlantRender$GrowthMode;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        renderFunction(): Internal.GrowingPlantRender$RenderFunction;
        hashCode(): number;
        wait(): void;
        predicate(): Internal.Predicate<Internal.Block>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly AGE_1: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_2: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_3: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly NONE: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_4: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_5: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly GROWING_PLANT: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_7: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly VALUES: ({"age_25": Internal.GrowingPlantRender$GrowthMode, "age_15": Internal.GrowingPlantRender$GrowthMode, "scale": Internal.GrowingPlantRender$GrowthMode, "none": Internal.GrowingPlantRender$GrowthMode, "translate": Internal.GrowingPlantRender$GrowthMode, "age_7": Internal.GrowingPlantRender$GrowthMode, "double_translate": Internal.GrowingPlantRender$GrowthMode, "age_5": Internal.GrowingPlantRender$GrowthMode, "age_4": Internal.GrowingPlantRender$GrowthMode, "age_3": Internal.GrowingPlantRender$GrowthMode, "growing_plant": Internal.GrowingPlantRender$GrowthMode, "age_2": Internal.GrowingPlantRender$GrowthMode, "pickles": Internal.GrowingPlantRender$GrowthMode, "age_1": Internal.GrowingPlantRender$GrowthMode}) & (Internal.Map<string, Internal.GrowingPlantRender$GrowthMode>);
        static readonly AGE_15: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly AGE_25: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly TRANSLATE: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly DOUBLE_TRANSLATE: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly MODE_BY_PROPERTY: ({[key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode, [key: Internal.IntegerProperty]: Internal.GrowingPlantRender$GrowthMode}) & (Internal.Map<Internal.IntegerProperty, Internal.GrowingPlantRender$GrowthMode>);
        static readonly SCALE: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
        static readonly PICKLES: (Internal.GrowingPlantRender$GrowthMode) & (Internal.GrowingPlantRender$GrowthMode);
    }
    type GrowingPlantRender$GrowthMode_ = GrowingPlantRender$GrowthMode;
    class LootBuilder implements Internal.FunctionContainer, Internal.ConditionContainer {
        constructor(prev: Internal.JsonElement_)
        getClass(): typeof any;
        clearPools(): void;
        addFunction(arg0: Internal.JsonObject_): Internal.FunctionContainer;
        randomChanceWithLooting(chance: number, multiplier: number): Internal.ConditionContainer;
        name(name: net.minecraft.network.chat.Component_, entity: Internal.LootContext$EntityTarget_): Internal.FunctionContainer;
        notify(): void;
        toJson(): Internal.JsonObject;
        addPool(p: Internal.Consumer_<Internal.LootBuilderPool>): void;
        damage(damage: Internal.NumberProvider_): Internal.FunctionContainer;
        wait(arg0: number, arg1: number): void;
        count(count: Internal.NumberProvider_): Internal.FunctionContainer;
        survivesExplosion(): Internal.ConditionContainer;
        clearConditions(): void;
        copyName(source: Internal.CopyNameFunction$NameSource_): Internal.FunctionContainer;
        addCondition(arg0: Internal.JsonObject_): Internal.ConditionContainer;
        lootTable(table: ResourceLocation_, seed: number): Internal.FunctionContainer;
        enchantWithLevels(levels: Internal.NumberProvider_, treasure: boolean): Internal.FunctionContainer;
        toString(): string;
        enchantRandomly(enchantments: ResourceLocation_[]): Internal.FunctionContainer;
        furnaceSmelt(): Internal.FunctionContainer;
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): Internal.ConditionContainer;
        clearFunctions(): void;
        lootingEnchant(count: Internal.NumberProvider_, limit: number): Internal.FunctionContainer;
        notifyAll(): void;
        addConditionalFunction(func: Internal.Consumer_<Internal.ConditionalFunction>): Internal.FunctionContainer;
        randomChance(chance: number): Internal.ConditionContainer;
        killedByPlayer(): Internal.ConditionContainer;
        nbt(tag: Internal.CompoundTag_): Internal.FunctionContainer;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): Internal.ConditionContainer;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        name(name: net.minecraft.network.chat.Component_): Internal.FunctionContainer;
        get class(): typeof any
        type: string;
        conditions: Internal.JsonArray;
        pools: Internal.JsonArray;
        functions: Internal.JsonArray;
        customId: ResourceLocation;
    }
    type LootBuilder_ = LootBuilder;
    interface IRecipeHandler <K> extends Internal.IFilteredHandler<K> {
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract getContents(): Internal.List<any>;
        test(arg0: K): boolean;
        or(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        and(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        isDistinct(): boolean;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        abstract handleRecipeInner(arg0: Internal.IO_, arg1: Internal.GTRecipe_, arg2: Internal.List_<K>, arg3: boolean): Internal.List<K>;
        handleRecipe(arg0: Internal.IO_, arg1: Internal.GTRecipe_, arg2: Internal.List_<any>, arg3: boolean): Internal.List<K>;
        getSize(): number;
        getPriority(): number;
        copyContent(arg0: any): K;
        negate(): Internal.Predicate<K>;
        abstract getCapability(): RecipeCapability<K>;
        abstract getTotalContentAmount(): number;
        shouldSearchContent(): boolean;
        get contents(): Internal.List<any>
        get distinct(): boolean
        get size(): number
        get priority(): number
        get capability(): RecipeCapability<K>
        get totalContentAmount(): number
        readonly ENTRY_COMPARATOR: Internal.Comparator<Internal.IRecipeHandler<any>>;
    }
    type IRecipeHandler_<K> = IRecipeHandler<K>;
    class TubeTier extends Internal.Enum<Internal.TubeTier> implements Internal.ITier {
        getClass(): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getBaseCapacity(): number;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.TubeTier;
        getTubeCapacity(): number;
        static values(): Internal.TubeTier[];
        getTubePullAmount(): number;
        setConfigReference(capacityReference: Internal.CachedLongValue_, pullReference: Internal.CachedLongValue_): void;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        static valueOf(name: string): Internal.TubeTier;
        getBaseTier(): Internal.BaseTier;
        toString(): string;
        "compareTo(mekanism.common.tier.TubeTier)"(arg0: Internal.TubeTier_): number;
        getBasePull(): number;
        notifyAll(): void;
        compareTo(arg0: Internal.TubeTier_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TubeTier>>;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static get(tier: Internal.BaseTier_): Internal.TubeTier;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get baseCapacity(): number
        get declaringClass(): typeof Internal.TubeTier
        get tubeCapacity(): number
        get tubePullAmount(): number
        get baseTier(): Internal.BaseTier
        get basePull(): number
        static readonly ADVANCED: (Internal.TubeTier) & (Internal.TubeTier);
        static readonly BASIC: (Internal.TubeTier) & (Internal.TubeTier);
        static readonly ELITE: (Internal.TubeTier) & (Internal.TubeTier);
        static readonly ULTIMATE: (Internal.TubeTier) & (Internal.TubeTier);
    }
    type TubeTier_ = "elite" | "advanced" | TubeTier | "ultimate" | "basic";
    class TransitRequest$ItemData {
        constructor(itemType: Internal.HashedItem_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        use(amount: number): Internal.ItemStack;
        getTotalCount(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getStack(): Internal.ItemStack;
        getItemType(): Internal.HashedItem;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        get totalCount(): number
        get stack(): Internal.ItemStack
        get itemType(): Internal.HashedItem
    }
    type TransitRequest$ItemData_ = TransitRequest$ItemData;
    class ReportEnvironment extends Internal.Record {
        constructor(arg0: string, arg1: Internal.ReportEnvironment$Server_)
        server(): Internal.ReportEnvironment$Server;
        getClass(): typeof any;
        static local(): Internal.ReportEnvironment;
        static realm(arg0: Internal.RealmsServer_): Internal.ReportEnvironment;
        toString(): string;
        thirdPartyServerInfo(): Internal.AbuseReportRequest$ThirdPartyServerInfo;
        clientInfo(): Internal.AbuseReportRequest$ClientInfo;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        clientVersion(): string;
        static thirdParty(arg0: string): Internal.ReportEnvironment;
        wait(): void;
        wait(arg0: number): void;
        static create(arg0: Internal.ReportEnvironment$Server_): Internal.ReportEnvironment;
        equals(arg0: any): boolean;
        realmInfo(): Internal.AbuseReportRequest$RealmInfo;
        get class(): typeof any
    }
    type ReportEnvironment_ = ReportEnvironment;
    class StonecutterMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        broadcastFullState(): void;
        notify(): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        getRecipes(): Internal.List<Internal.StonecutterRecipe>;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        registerUpdateListener(arg0: Internal.Runnable_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        handler$bpb000$CLONE(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_, arg4: Internal.CallbackInfo_): void;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        doClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        getSelectedRecipeIndex(): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        synchronizeCarriedToRemote(): void;
        resumeRemoteUpdates(): void;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        getNumRecipes(): number;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        hasInputItem(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get recipes(): Internal.List<Internal.StonecutterRecipe>
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        get selectedRecipeIndex(): number
        set carried(arg0: Internal.ItemStack_)
        get numRecipes(): number
        get stateId(): number
        static readonly INPUT_SLOT: (0) & (number);
        static readonly RESULT_SLOT: (1) & (number);
        readonly container: net.minecraft.world.Container;
    }
    type StonecutterMenu_ = StonecutterMenu;
    class WorldCreationContext extends Internal.Record {
        constructor(arg0: any_, arg1: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg2: Internal.ReloadableServerResources_, arg3: Internal.WorldDataConfiguration_)
        constructor(options: Internal.WorldOptions_, datapackDimensions: Internal.Registry_<Internal.LevelStem>, selectedDimensions: Internal.WorldDimensions_, worldgenRegistries: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, dataPackResources: Internal.ReloadableServerResources_, dataConfiguration: Internal.WorldDataConfiguration_)
        constructor(arg0: Internal.WorldOptions_, arg1: Internal.WorldDimensions_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.ReloadableServerResources_, arg4: Internal.WorldDataConfiguration_)
        getClass(): typeof any;
        dataConfiguration(): Internal.WorldDataConfiguration;
        toString(): string;
        withDataConfiguration(arg0: Internal.WorldDataConfiguration_): this;
        datapackDimensions(): Internal.Registry<Internal.LevelStem>;
        notifyAll(): void;
        notify(): void;
        withOptions(arg0: Internal.WorldCreationContext$OptionsModifier_): this;
        wait(arg0: number, arg1: number): void;
        selectedDimensions(): Internal.WorldDimensions;
        worldgenLoadContext(): Internal.RegistryAccess$Frozen;
        worldgenRegistries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        hashCode(): number;
        dataPackResources(): Internal.ReloadableServerResources;
        options(): Internal.WorldOptions;
        wait(): void;
        wait(arg0: number): void;
        withDimensions(arg0: Internal.WorldCreationContext$DimensionsUpdater_): this;
        withSettings(arg0: Internal.WorldOptions_, arg1: Internal.WorldDimensions_): this;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type WorldCreationContext_ = WorldCreationContext;
    class CapabilityMap extends Internal.IdentityHashMap<RecipeCapability<any>, Internal.Content[]> implements Internal.InputReplacement, Internal.OutputReplacement {
        constructor()
        constructor(arg0: Internal.Map_<RecipeCapability<any>, Internal.Content[]>)
        get(arg0: any): Internal.Content[];
        "transform(dev.latvian.mods.kubejs.recipe.InputReplacementTransformer)"(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        containsValue(arg0: any): boolean;
        getOrDefault(arg0: any, arg1: Internal.Content_[]): Internal.Content[];
        computeIfAbsent(arg0: RecipeCapability_<any>, arg1: Internal.Function_<RecipeCapability<any>, Internal.Content[]>): Internal.Content[];
        notify(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        putIfAbsent(arg0: RecipeCapability_<any>, arg1: Internal.Content_[]): Internal.Content[];
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        remove(arg0: any): Internal.Content[];
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        wait(): void;
        replaceInput(arg0: Internal.RecipeJS_, arg1: Internal.ReplacementMatch_, arg2: Internal.InputReplacement_): this;
        put(arg0: RecipeCapability_<any>, arg1: Internal.Content_[]): Internal.Content[];
        keySet(): Internal.Set<RecipeCapability<any>>;
        transform(transformer: Internal.InputReplacementTransformer_): Internal.InputReplacementTransformer$Replacement;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<RecipeCapability<any>, Internal.Content[]>>;
        clone(): any;
        getClass(): typeof any;
        replace(arg0: RecipeCapability_<any>, arg1: Internal.Content_[], arg2: Internal.Content_[]): boolean;
        static of<K, V>(): Internal.Map<K, V>;
        isInput(arg0: Internal.RecipeJS_, arg1: Internal.ReplacementMatch_): boolean;
        values(): Internal.Collection<Internal.Content[]>;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        compute(arg0: RecipeCapability_<any>, arg1: Internal.BiFunction_<RecipeCapability<any>, Internal.Content[], Internal.Content[]>): Internal.Content[];
        replaceOutput(arg0: Internal.RecipeJS_, arg1: Internal.ReplacementMatch_, arg2: Internal.OutputReplacement_): any;
        containsKey(arg0: any): boolean;
        add(arg0: RecipeCapability_<any>, arg1: Internal.Content_): void;
        replaceAll(arg0: Internal.BiFunction_<RecipeCapability<any>, Internal.Content[], Internal.Content[]>): void;
        replace(arg0: RecipeCapability_<any>, arg1: Internal.Content_[]): Internal.Content[];
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        static of(o: any): Internal.InputReplacement;
        toString(): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: Internal.ReplacementMatch_): boolean;
        "transform(dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer)"(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        computeIfPresent(arg0: RecipeCapability_<any>, arg1: Internal.BiFunction_<RecipeCapability<any>, Internal.Content[], Internal.Content[]>): Internal.Content[];
        size(): number;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        putAll(arg0: Internal.Map_<RecipeCapability<any>, Internal.Content[]>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        wait(arg0: number): void;
        forEach(arg0: Internal.BiConsumer_<RecipeCapability<any>, Internal.Content[]>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        merge(arg0: RecipeCapability_<any>, arg1: Internal.Content_[], arg2: Internal.BiFunction_<Internal.Content[], Internal.Content[], Internal.Content[]>): Internal.Content[];
        get class(): typeof any
        get empty(): boolean
    }
    type CapabilityMap_ = CapabilityMap;
    class LargeDripstoneFeature extends Internal.Feature<Internal.LargeDripstoneConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.LargeDripstoneConfiguration>)
        place(arg0: Internal.FeaturePlaceContext_<Internal.LargeDripstoneConfiguration>): boolean;
        getClass(): typeof any;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.LargeDripstoneConfiguration, Internal.Feature<Internal.LargeDripstoneConfiguration>>>;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        place(arg0: Internal.LargeDripstoneConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type LargeDripstoneFeature_ = LargeDripstoneFeature;
    class ToolCall {
        constructor(arg0: string, arg1: Internal.FunctionToolCall_)
        getClass(): typeof any;
        getFunction(): Internal.FunctionToolCall;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getType(): string;
        notifyAll(): void;
        wait(arg0: number): void;
        getId(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get "function"(): Internal.FunctionToolCall
        get type(): string
        get id(): string
        static CODEC: Internal.Codec<Internal.ToolCall>;
    }
    type ToolCall_ = ToolCall;
    abstract class InputEvent$MouseButton extends net.minecraftforge.client.event.InputEvent {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getButton(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        getModifiers(): number;
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
        getAction(): number;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get button(): number
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get action(): number
    }
    type InputEvent$MouseButton_ = InputEvent$MouseButton;
    class CompositeByteBuf extends Internal.AbstractReferenceCountedByteBuf implements Internal.Iterable<Internal.ByteBuf> {
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number, ...arg3: Internal.ByteBuf_[])
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number, arg3: Internal.Iterable_<Internal.ByteBuf>)
        constructor(arg0: Internal.ByteBufAllocator_, arg1: boolean, arg2: number)
        resetWriterIndex(): this;
        indexOf(arg0: number, arg1: number, arg2: number): number;
        readShortLE(): number;
        writeInt(arg0: number): Internal.ByteBuf;
        addComponent(arg0: boolean, arg1: Internal.ByteBuf_): this;
        readDouble(): number;
        "addComponents(boolean,io.netty.buffer.ByteBuf[])"(arg0: boolean, ...arg1: Internal.ByteBuf_[]): this;
        skipBytes(arg0: number): Internal.ByteBuf;
        getShortLE(arg0: number): number;
        "addComponents(io.netty.buffer.ByteBuf[])"(...arg0: Internal.ByteBuf_[]): this;
        "writeBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        isReadable(arg0: number): boolean;
        removeComponent(arg0: number): this;
        getBytes(arg0: number, arg1: Internal.OutputStream_, arg2: number): this;
        getBytes(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        readUnsignedMedium(): number;
        writeBytes(arg0: Internal.InputStream_, arg1: number): number;
        compareTo(arg0: Internal.ByteBuf_): number;
        readUnsignedMediumLE(): number;
        writeIntLE(arg0: number): Internal.ByteBuf;
        component(arg0: number): Internal.ByteBuf;
        setMediumLE(arg0: number, arg1: number): Internal.ByteBuf;
        slice(): Internal.ByteBuf;
        writeMedium(arg0: number): Internal.ByteBuf;
        copy(arg0: number, arg1: number): Internal.ByteBuf;
        addComponent(arg0: boolean, arg1: number, arg2: Internal.ByteBuf_): this;
        resetReaderIndex(): Internal.ByteBuf;
        release(): boolean;
        readBytes(arg0: number[]): Internal.ByteBuf;
        readByte(): number;
        getClass(): typeof any;
        "getBytes(int,byte[])"(arg0: number, arg1: number[]): this;
        writerIndex(arg0: number): Internal.ByteBuf;
        spliterator(): Internal.Spliterator<Internal.ByteBuf>;
        isContiguous(): boolean;
        arrayOffset(): number;
        retainedSlice(arg0: number, arg1: number): Internal.ByteBuf;
        addComponents(...arg0: Internal.ByteBuf_[]): this;
        "getBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        nioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        getUnsignedInt(arg0: number): number;
        getUnsignedMedium(arg0: number): number;
        getUnsignedMediumLE(arg0: number): number;
        addComponents(arg0: boolean, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        capacity(arg0: number): this;
        maxCapacity(): number;
        getBytes(arg0: number, arg1: Internal.ByteBuffer_): this;
        consolidate(): this;
        clear(): Internal.ByteBuf;
        getCharSequence(arg0: number, arg1: number, arg2: Internal.Charset_): Internal.CharSequence;
        readMedium(): number;
        unwrap(): Internal.ByteBuf;
        retain(): Internal.ReferenceCounted;
        setDouble(arg0: number, arg1: number): this;
        forEach(arg0: Internal.Consumer_<Internal.ByteBuf>): void;
        markWriterIndex(): this;
        wait(arg0: number): void;
        "compareTo(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): number;
        touch(arg0: any): this;
        writeChar(arg0: number): Internal.ByteBuf;
        duplicate(): Internal.ByteBuf;
        getDouble(arg0: number): number;
        isDirect(): boolean;
        readUnsignedInt(): number;
        "writeBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): this;
        "getBytes(int,java.io.OutputStream,int)"(arg0: number, arg1: Internal.OutputStream_, arg2: number): this;
        "getBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        "addComponents(int,io.netty.buffer.ByteBuf[])"(arg0: number, ...arg1: Internal.ByteBuf_[]): this;
        getUnsignedIntLE(arg0: number): number;
        setMedium(arg0: number, arg1: number): this;
        getBytes(arg0: number, arg1: number[]): this;
        readChar(): string;
        setInt(arg0: number, arg1: number): Internal.ByteBuf;
        bytesBefore(arg0: number, arg1: number, arg2: number): number;
        "readBytes(java.nio.channels.GatheringByteChannel,int)"(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        asByteBuf(): Internal.ByteBuf;
        isWritable(arg0: number): boolean;
        alloc(): Internal.ByteBufAllocator;
        readInt(): number;
        nioBuffers(arg0: number, arg1: number): Internal.ByteBuffer[];
        writeBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        setChar(arg0: number, arg1: number): Internal.ByteBuf;
        "setBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        writeBytes(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        numComponents(): number;
        getLong(arg0: number): number;
        wait(): void;
        "readBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        readerIndex(arg0: number): Internal.ByteBuf;
        "readBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        "setBytes(int,java.nio.channels.ScatteringByteChannel,int)"(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        addComponent(arg0: number, arg1: Internal.ByteBuf_): this;
        writeDoubleLE(arg0: number): Internal.ByteBuf;
        "setBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        hasMemoryAddress(): boolean;
        asReadOnly(): Internal.ByteBuf;
        addComponents(arg0: Internal.Iterable_<Internal.ByteBuf>): this;
        setZero(arg0: number, arg1: number): Internal.ByteBuf;
        readLongLE(): number;
        getShort(arg0: number): number;
        writeLong(arg0: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        readUnsignedIntLE(): number;
        getInt(arg0: number): number;
        writeBytes(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        "setBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        removeComponents(arg0: number, arg1: number): this;
        writeZero(arg0: number): this;
        addComponents(arg0: number, ...arg1: Internal.ByteBuf_[]): this;
        writeByte(arg0: number): Internal.ByteBuf;
        getBytes(arg0: number, arg1: Internal.ByteBuf_): this;
        "readBytes(java.io.OutputStream,int)"(arg0: Internal.OutputStream_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        ensureWritable(arg0: number, arg1: boolean): number;
        "readBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        getBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        getUnsignedShort(arg0: number): number;
        readUnsignedByte(): number;
        "writeBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): this;
        "getBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        getUnsignedShortLE(arg0: number): number;
        "addComponents(int,java.lang.Iterable)"(arg0: number, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        discardReadBytes(): this;
        "writeBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        equals(arg0: any): boolean;
        writeBytes(arg0: number[]): this;
        toString(arg0: number, arg1: number, arg2: Internal.Charset_): string;
        readableBytes(): number;
        setShort(arg0: number, arg1: number): this;
        setFloat(arg0: number, arg1: number): this;
        "setBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        "writeBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): this;
        "setBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        maxFastWritableBytes(): number;
        forEachByteDesc(arg0: Internal.ByteProcessor_): number;
        nioBufferCount(): number;
        nioBuffers(): Internal.ByteBuffer[];
        writeBytes(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        writeFloat(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        getFloat(arg0: number): number;
        "setBytes(int,byte[])"(arg0: number, arg1: number[]): Internal.ByteBuf;
        toComponentIndex(arg0: number): number;
        memoryAddress(): number;
        ensureWritable(arg0: number): Internal.ByteBuf;
        forEachByte(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        internalComponentAtOffset(arg0: number): Internal.ByteBuf;
        getMediumLE(arg0: number): number;
        maxWritableBytes(): number;
        isReadable(): boolean;
        readIntLE(): number;
        getByte(arg0: number): number;
        writeShort(arg0: number): Internal.ByteBuf;
        bytesBefore(arg0: number, arg1: number): number;
        getMedium(arg0: number): number;
        "writeBytes(java.io.InputStream,int)"(arg0: Internal.InputStream_, arg1: number): number;
        maxNumComponents(): number;
        "addComponent(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): this;
        readBoolean(): boolean;
        addComponents(arg0: number, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        consolidate(arg0: number, arg1: number): this;
        setCharSequence(arg0: number, arg1: Internal.CharSequence_, arg2: Internal.Charset_): number;
        isReadOnly(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        writeLongLE(arg0: number): Internal.ByteBuf;
        setDoubleLE(arg0: number, arg1: number): Internal.ByteBuf;
        writeCharSequence(arg0: Internal.CharSequence_, arg1: Internal.Charset_): number;
        iterator(): Internal.Iterator<Internal.ByteBuf>;
        decompose(arg0: number, arg1: number): Internal.List<Internal.ByteBuf>;
        readUnsignedShort(): number;
        forEachByteDesc(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        release(arg0: number): boolean;
        writeMediumLE(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        writeBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        forEachByte(arg0: Internal.ByteProcessor_): number;
        setLongLE(arg0: number, arg1: number): Internal.ByteBuf;
        getUnsignedByte(arg0: number): number;
        "readBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        "readBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        "getBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        addComponent(arg0: Internal.ByteBuf_): this;
        setIndex(arg0: number, arg1: number): this;
        getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        retainedSlice(): Internal.ByteBuf;
        "addComponent(boolean,io.netty.buffer.ByteBuf)"(arg0: boolean, arg1: Internal.ByteBuf_): this;
        "addComponents(java.lang.Iterable)"(arg0: Internal.Iterable_<Internal.ByteBuf>): this;
        "readBytes(byte[])"(arg0: number[]): Internal.ByteBuf;
        toString(): string;
        readDoubleLE(): number;
        "getBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): this;
        writeBytes(arg0: Internal.ByteBuf_): this;
        getBoolean(arg0: number): boolean;
        notifyAll(): void;
        addFlattenedComponents(arg0: boolean, arg1: Internal.ByteBuf_): this;
        "writeBytes(java.nio.channels.ScatteringByteChannel,int)"(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        nioBuffer(): Internal.ByteBuffer;
        readBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): this;
        readUnsignedShortLE(): number;
        "addComponents(boolean,java.lang.Iterable)"(arg0: boolean, arg1: Internal.Iterable_<Internal.ByteBuf>): this;
        internalNioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        toByteIndex(arg0: number): number;
        setBytes(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        getFloatLE(arg0: number): number;
        isWritable(): boolean;
        readerIndex(): number;
        "readBytes(int)"(arg0: number): Internal.ByteBuf;
        readBytes(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        retain(arg0: number): Internal.ByteBuf;
        writeBytes(arg0: Internal.ByteBuf_, arg1: number): this;
        writerIndex(): number;
        retainedDuplicate(): Internal.ByteBuf;
        "readBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        touch(): Internal.ByteBuf;
        componentAtOffset(arg0: number): Internal.ByteBuf;
        notify(): void;
        addComponents(arg0: boolean, ...arg1: Internal.ByteBuf_[]): this;
        compareTo(arg0: any): number;
        setShortLE(arg0: number, arg1: number): Internal.ByteBuf;
        setFloatLE(arg0: number, arg1: number): Internal.ByteBuf;
        readMediumLE(): number;
        order(): Internal.ByteOrder;
        writableBytes(): number;
        writeFloatLE(arg0: number): Internal.ByteBuf;
        setLong(arg0: number, arg1: number): this;
        getChar(arg0: number): string;
        "writeBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        setByte(arg0: number, arg1: number): this;
        discardSomeReadBytes(): Internal.ByteBuf;
        bytesBefore(arg0: number): number;
        readRetainedSlice(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: number[]): Internal.ByteBuf;
        readFloatLE(): number;
        array(): number[];
        writeShortLE(arg0: number): Internal.ByteBuf;
        readShort(): number;
        "writeBytes(byte[])"(arg0: number[]): this;
        getIntLE(arg0: number): number;
        readBytes(arg0: Internal.OutputStream_, arg1: number): Internal.ByteBuf;
        "getBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        slice(arg0: number, arg1: number): Internal.ByteBuf;
        capacity(): number;
        setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        readCharSequence(arg0: number, arg1: Internal.Charset_): Internal.CharSequence;
        getLongLE(arg0: number): number;
        readSlice(arg0: number): Internal.ByteBuf;
        wait(arg0: number, arg1: number): void;
        internalComponent(arg0: number): Internal.ByteBuf;
        "setBytes(int,java.io.InputStream,int)"(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        readFloat(): number;
        getDoubleLE(arg0: number): number;
        markReaderIndex(): this;
        writeBoolean(arg0: boolean): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuffer_): this;
        hasArray(): boolean;
        setBoolean(arg0: number, arg1: boolean): Internal.ByteBuf;
        writeDouble(arg0: number): this;
        setBytes(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        readLong(): number;
        copy(): Internal.ByteBuf;
        discardReadComponents(): this;
        "getBytes(int,java.nio.channels.GatheringByteChannel,int)"(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        readBytes(arg0: number): Internal.ByteBuf;
        refCnt(): number;
        setIntLE(arg0: number, arg1: number): Internal.ByteBuf;
        "setBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        hashCode(): number;
        toString(arg0: Internal.Charset_): string;
        order(arg0: Internal.ByteOrder_): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): this;
        get class(): typeof any
        get contiguous(): boolean
        get direct(): boolean
        get readable(): boolean
        get readOnly(): boolean
        get writable(): boolean
    }
    type CompositeByteBuf_ = CompositeByteBuf;
    class ItemTankBackpack extends Internal.ItemMaidBackpack {
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
        static setTankBackpack(arg0: Internal.EntityMaid_, arg1: Internal.TankBackpackData_, arg2: Internal.ItemStack_): void;
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
        static getTankBackpack(arg0: Internal.TankBackpackData_): Internal.ItemStack;
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
    type ItemTankBackpack_ = ItemTankBackpack;
    class MeasureUnit implements Internal.Serializable {
        getClass(): typeof any;
        getSubtype(): string;
        /**
         * @deprecated
        */
        getCopyOfMeasureUnitImpl(): Internal.MeasureUnitImpl;
        reciprocal(): this;
        static getAvailableTypes(): Internal.Set<string>;
        notify(): void;
        /**
         * @deprecated
        */
        static fromMeasureUnitImpl(arg0: Internal.MeasureUnitImpl_): Internal.MeasureUnit;
        wait(arg0: number, arg1: number): void;
        product(arg0: Internal.MeasureUnit_): this;
        splitToSingleUnits(): Internal.List<Internal.MeasureUnit>;
        static getAvailable(): Internal.Set<Internal.MeasureUnit>;
        getType(): string;
        getIdentifier(): string;
        withPrefix(arg0: Internal.MeasureUnit$MeasurePrefix_): this;
        static forIdentifier(arg0: string): Internal.MeasureUnit;
        toString(): string;
        getDimensionality(): number;
        notifyAll(): void;
        /**
         * @deprecated
        */
        static internalGetInstance(arg0: string, arg1: string): Internal.MeasureUnit;
        getPrefix(): Internal.MeasureUnit$MeasurePrefix;
        withDimensionality(arg0: number): this;
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
        static readonly PIXEL_PER_CENTIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly EARTH_RADIUS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DUNAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly OUNCE_TROY: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GIGABYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILE_PER_HOUR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly THERM_US: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FATHOM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GRAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILE_PER_GALLON_IMPERIAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PARSEC: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_MILE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly HECTOLITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGABIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOWATT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ACRE_FOOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_METER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUP: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_MILE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DOT_PER_CENTIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly RADIAN: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly INCH_HG: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_KILOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_KILOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGAPASCAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DESSERT_SPOON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BRITISH_THERMAL_UNIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DOT_PER_INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly METER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILE_SCANDINAVIAN: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly POINT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PIXEL_PER_INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LUMEN: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGAWATT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIWATT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ATMOSPHERE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIBAR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PERMILLE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FAHRENHEIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly QUART_IMPERIAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly YEAR_PERSON: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly NANOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOWATT_HOUR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FLUID_OUNCE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PERCENT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly TERABIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FLUID_OUNCE_IMPERIAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DAY_PERSON: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly FOODCALORIE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PERMYRIAD: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KARAT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MOLE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BUSHEL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_YARD: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly G_FORCE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_CENTIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGALITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MONTH_PERSON: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly MILLIAMPERE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PINT_METRIC: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SECOND: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly SQUARE_INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly POUND_FORCE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LITER_PER_100KILOMETERS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GENERIC_TEMPERATURE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PART_PER_MILLION: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MICROMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOGRAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BAR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MICROGRAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CELSIUS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly QUART: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DALTON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ARC_SECOND: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CALORIE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly EM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly NEWTON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_CENTIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_YARD: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ACRE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLILITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ITEM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FOOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ASTRONOMICAL_UNIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGAHERTZ: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DAY: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly OUNCE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MICROSECOND: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly NAUTICAL_MILE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_FOOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOBIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOPASCAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly JIGGER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGAPIXEL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly WATT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOBYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PETABYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIGRAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOWATT_HOUR_PER_100_KILOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GIGABIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ELECTRONVOLT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PINCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LITER_PER_KILOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly NANOSECOND: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly STONE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly TERABYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIMOLE_PER_LITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DECADE: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly POUND_FOOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CANDELA: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly TON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOHERTZ: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOJOULE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly AMPERE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly METER_PER_SECOND: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly YARD: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CARAT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly EARTH_MASS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly TABLESPOON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOMETER_PER_HOUR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DESSERT_SPOON_IMPERIAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly YEAR: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly POUND: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIGRAM_PER_DECILITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LUX: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GIGAWATT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly ARC_MINUTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PASCAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MEGABYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LIGHT_YEAR: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KELVIN: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DEGREE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CENTURY: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly REVOLUTION_ANGLE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly WEEK: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly CENTIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUP_METRIC: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DECIMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly VOLT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SOLAR_RADIUS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KNOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GRAIN: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly LITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SQUARE_FOOT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIMETER_OF_MERCURY: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly HORSEPOWER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly METER_PER_SECOND_SQUARED: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MONTH: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly PIXEL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly OHM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BARREL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GIGAHERTZ: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly JOULE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GALLON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLIGRAM_OFGLUCOSE_PER_DECILITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BYTE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly FURLONG: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CUBIC_METER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly POUND_PER_SQUARE_INCH: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly WEEK_PERSON: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly MINUTE: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly SOLAR_LUMINOSITY: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly CENTILITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PINT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly BIT: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly GALLON_IMPERIAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DROP: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly HERTZ: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILE_PER_GALLON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly KILOCALORIE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly SOLAR_MASS: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly HECTARE: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly MILLISECOND: (com.ibm.icu.util.TimeUnit) & (Internal.MeasureUnit);
        static readonly HECTOPASCAL: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly NEWTON_METER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly HOUR: (com.ibm.icu.util.TimeUnit) & (com.ibm.icu.util.TimeUnit);
        static readonly DRAM: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly METRIC_TON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly DECILITER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly TEASPOON: (Internal.MeasureUnit) & (Internal.MeasureUnit);
        static readonly PICOMETER: (Internal.MeasureUnit) & (Internal.MeasureUnit);
    }
    type MeasureUnit_ = MeasureUnit;
    class ItemAlloy extends Internal.Item {
        constructor(tier: Internal.AlloyTier_, properties: Internal.Item$Properties_)
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
        getTier(): Internal.AlloyTier;
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
        useOn(context: Internal.UseOnContext_): Internal.InteractionResult;
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
        get tier(): Internal.AlloyTier
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
    type ItemAlloy_ = ItemAlloy;
    interface UnmodifiableConfig {
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getLongOrElse(java.util.List,long)"(arg0: Internal.List_<string>, arg1: number): number;
        "get(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        "getByteOrElse(java.util.List,byte)"(arg0: Internal.List_<string>, arg1: number): number;
        getInt(arg0: Internal.List_<string>): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: string, arg1: number): number;
        "getChar(java.lang.String)"(arg0: string): string;
        "getOptional(java.lang.String)"<T>(arg0: string): Internal.Optional<T>;
        "apply(java.lang.String)"<T>(arg0: string): T;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        "getEnumOrElse(java.util.List,java.lang.Class,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getEnumOrElse(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        "getRaw(java.lang.String)"<T>(arg0: string): T;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        "getEnumOrElse(java.lang.String,java.lang.Enum)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        "getOptionalLong(java.util.List)"(arg0: Internal.List_<string>): Internal.OptionalLong;
        "getOptionalInt(java.util.List)"(arg0: Internal.List_<string>): Internal.OptionalInt;
        "getCharOrElse(java.util.List,char)"(arg0: Internal.List_<string>, arg1: string): string;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        "getIntOrElse(java.lang.String,java.util.function.IntSupplier)"(arg0: string, arg1: Internal.IntSupplier_): number;
        abstract "getRaw(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        "getIntOrElse(java.util.List,java.util.function.IntSupplier)"(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        "getEnum(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getOptionalEnum(java.util.List,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        "getShort(java.lang.String)"(arg0: string): number;
        "getOptionalEnum(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        "contains(java.lang.String)"(arg0: string): boolean;
        "getLongOrElse(java.util.List,java.util.function.LongSupplier)"(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        "getOptional(java.util.List)"<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        "getOrElse(java.util.List,java.util.function.Supplier)"<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        "getLong(java.lang.String)"(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getLongOrElse(arg0: string, arg1: number): number;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getEnumOrElse(java.util.List,java.lang.Enum,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getIntOrElse(arg0: string, arg1: number): number;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        "getEnumOrElse(java.lang.String,java.lang.Enum,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract size(): number;
        "getShortOrElse(java.util.List,short)"(arg0: Internal.List_<string>, arg1: number): number;
        abstract valueMap(): Internal.Map<string, any>;
        "get(java.lang.String)"<T>(arg0: string): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getByte(java.lang.String)"(arg0: string): number;
        "getEnum(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        "getLongOrElse(java.lang.String,long)"(arg0: string, arg1: number): number;
        "getLong(java.util.List)"(arg0: Internal.List_<string>): number;
        "getChar(java.util.List)"(arg0: Internal.List_<string>): string;
        "getEnum(java.lang.String,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        "getOptionalLong(java.lang.String)"(arg0: string): Internal.OptionalLong;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        contains(arg0: string): boolean;
        "getShort(java.util.List)"(arg0: Internal.List_<string>): number;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        abstract "contains(java.util.List)"(arg0: Internal.List_<string>): boolean;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        "getOptionalEnum(java.lang.String,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        "getOrElse(java.util.List,java.lang.Object)"<T>(arg0: Internal.List_<string>, arg1: T): T;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        "getLongOrElse(java.lang.String,java.util.function.LongSupplier)"(arg0: string, arg1: Internal.LongSupplier_): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        "getByte(java.util.List)"(arg0: Internal.List_<string>): number;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        "getOptionalEnum(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        abstract entrySet(): Internal.Set<Internal.UnmodifiableConfig$Entry>;
        "getEnum(java.util.List,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        "getInt(java.util.List)"(arg0: Internal.List_<string>): number;
        "getByteOrElse(java.lang.String,byte)"(arg0: string, arg1: number): number;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getChar(arg0: Internal.List_<string>): string;
        "getEnumOrElse(java.lang.String,java.lang.Class,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getIntOrElse(java.util.List,int)"(arg0: Internal.List_<string>, arg1: number): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        "getOrElse(java.lang.String,java.lang.Object)"<T>(arg0: string, arg1: T): T;
        isEmpty(): boolean;
        "getOptionalInt(java.lang.String)"(arg0: string): Internal.OptionalInt;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        "getInt(java.lang.String)"(arg0: string): number;
        "getEnumOrElse(java.util.List,java.lang.Enum)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getOrElse(java.lang.String,java.util.function.Supplier)"<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        "isNull(java.lang.String)"(arg0: string): boolean;
        "getIntOrElse(java.lang.String,int)"(arg0: string, arg1: number): number;
        getByte(arg0: string): number;
        "getCharOrElse(java.lang.String,char)"(arg0: string, arg1: string): string;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "apply(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        "isNull(java.util.List)"(arg0: Internal.List_<string>): boolean;
        "getShortOrElse(java.lang.String,short)"(arg0: string, arg1: number): number;
        "getEnumOrElse(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get empty(): boolean
    }
    type UnmodifiableConfig_ = UnmodifiableConfig;
    class SawmillRecipe$ChanceOutput {
        getClass(): typeof any;
        toString(): string;
        getMaxSecondaryOutput(): Internal.ItemStack;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getSecondaryOutput(): Internal.ItemStack;
        getMainOutput(): Internal.ItemStack;
        nextSecondaryOutput(): Internal.ItemStack;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get maxSecondaryOutput(): Internal.ItemStack
        get secondaryOutput(): Internal.ItemStack
        get mainOutput(): Internal.ItemStack
    }
    type SawmillRecipe$ChanceOutput_ = SawmillRecipe$ChanceOutput;
    class SNBTCompoundTag extends Internal.CompoundTag {
        constructor()
        getLong(arg0: string): number;
        getLongArray(arg0: string): number[];
        merge(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getCompound(java.lang.String)"(string: string): this;
        getFloat(arg0: string): number;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        putShort(arg0: string, arg1: number): void;
        putLongArray(arg0: string, arg1: number[]): void;
        notify(): void;
        getTagType(arg0: string): number;
        contains(arg0: string): boolean;
        sizeInBytes(): number;
        isBoolean(key: string): boolean;
        putLongArray(arg0: string, arg1: Internal.List_<number>): void;
        getBoolean(arg0: string): boolean;
        write(arg0: Internal.DataOutput_): void;
        getCompound(string: string): this;
        singleLine(key: string): void;
        comment(key: string, comment: string): void;
        getList<T extends Internal.Tag>(key: string, type: T): Internal.List<T>;
        "comment(java.lang.String,java.lang.String[])"(key: string, ...comment: string[]): void;
        "putLongArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        getShort(arg0: string): number;
        getCompound(arg0: string): Internal.CompoundTag;
        accept(arg0: Internal.TagVisitor_): void;
        getAllKeys(): Internal.Set<string>;
        getUUID(arg0: string): Internal.UUID;
        putByteArray(arg0: string, arg1: number[]): void;
        "getCompound(java.lang.String)"(arg0: string): Internal.CompoundTag;
        "putIntArray(java.lang.String,int[])"(arg0: string, arg1: number[]): void;
        copy(): Internal.Tag;
        putFloat(arg0: string, arg1: number): void;
        getDouble(arg0: string): number;
        wait(): void;
        getString(arg0: string): string;
        remove(arg0: string): void;
        getType(): Internal.TagType<Internal.CompoundTag>;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        getClass(): typeof any;
        "getList(java.lang.String,int)"(arg0: string, arg1: number): Internal.ListTag;
        "putByteArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        put(arg0: string, arg1: Internal.Tag_): Internal.Tag;
        putUUID(arg0: string, arg1: Internal.UUID_): void;
        getByteArray(arg0: string): number[];
        getInt(arg0: string): number;
        putByte(arg0: string, arg1: number): void;
        isEmpty(): boolean;
        putIntArray(arg0: string, arg1: number[]): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        get(arg0: string): Internal.Tag;
        getComment(key: string): string;
        putNumber(key: string, number: number): void;
        putLong(arg0: string, arg1: number): void;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        putString(arg0: string, arg1: string): void;
        putByteArray(arg0: string, arg1: Internal.List_<number>): void;
        "putLongArray(java.lang.String,long[])"(arg0: string, arg1: number[]): void;
        getId(): number;
        putDouble(arg0: string, arg1: number): void;
        comment(key: string, ...comment: string[]): void;
        "putByteArray(java.lang.String,byte[])"(arg0: string, arg1: number[]): void;
        putIntArray(arg0: string, arg1: Internal.List_<number>): void;
        getNullableList(key: string, type: number): Internal.ListTag;
        getList(arg0: string, arg1: number): Internal.ListTag;
        singleLine(): void;
        toString(): string;
        getIntArray(arg0: string): number[];
        "comment(java.lang.String,java.lang.String)"(key: string, comment: string): void;
        notifyAll(): void;
        getByte(arg0: string): number;
        putNull(key: string): void;
        "putIntArray(java.lang.String,java.util.List)"(arg0: string, arg1: Internal.List_<number>): void;
        hashCode(): number;
        size(): number;
        getAsString(): string;
        hasUUID(arg0: string): boolean;
        static of(tag: Internal.Tag_): Internal.SNBTCompoundTag;
        wait(arg0: number): void;
        putBoolean(key: string, value: boolean): void;
        putInt(arg0: string, arg1: number): void;
        contains(arg0: string, arg1: number): boolean;
        equals(arg0: any): boolean;
        "getList(java.lang.String,java.lang.Class)"<T extends Internal.Tag>(key: string, type: T): Internal.List<T>;
        get allKeys(): Internal.Set<string>
        get type(): Internal.TagType<Internal.CompoundTag>
        get class(): typeof any
        get empty(): boolean
        get id(): number
        get asString(): string
    }
    type SNBTCompoundTag_ = SNBTCompoundTag;
    abstract class CookingUpgradeWrapper <W extends Internal.CookingUpgradeWrapper<W, U, R>, U extends Internal.UpgradeItemBase<W> & Internal.ICookingUpgradeItem, R extends Internal.AbstractCookingRecipe> extends Internal.UpgradeWrapperBase<W, U> implements Internal.ICookingUpgrade<R>, Internal.ITickableUpgrade {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        tick(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getCookingLogic(): Internal.CookingLogic<R>;
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
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get cookingLogic(): Internal.CookingLogic<R>
        get enabled(): boolean
        get cooldownTime(): number
    }
    type CookingUpgradeWrapper_<W extends Internal.CookingUpgradeWrapper<W, U, R>, U extends Internal.UpgradeItemBase<W> & Internal.ICookingUpgradeItem, R extends Internal.AbstractCookingRecipe> = CookingUpgradeWrapper<W, U, R>;
    class RandomSelectorFeature extends Internal.Feature<Internal.RandomFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RandomFeatureConfiguration>)
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.RandomFeatureConfiguration, Internal.Feature<Internal.RandomFeatureConfiguration>>>;
        getClass(): typeof any;
        toString(): string;
        place(arg0: Internal.FeaturePlaceContext_<Internal.RandomFeatureConfiguration>): boolean;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        place(arg0: Internal.RandomFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type RandomSelectorFeature_ = RandomSelectorFeature;
    class CookingUpgradeWrapper$BlastingUpgradeWrapper extends Internal.CookingUpgradeWrapper<Internal.CookingUpgradeWrapper$BlastingUpgradeWrapper, Internal.BlastingUpgradeItem, Internal.BlastingRecipe> {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getCookingLogic(): Internal.CookingLogic<Internal.BlastingRecipe>;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        tick(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_): void;
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
        get cookingLogic(): Internal.CookingLogic<Internal.BlastingRecipe>
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get enabled(): boolean
        get cooldownTime(): number
    }
    type CookingUpgradeWrapper$BlastingUpgradeWrapper_ = CookingUpgradeWrapper$BlastingUpgradeWrapper;
    interface Command <S> {
        abstract run(arg0: Internal.CommandContext_<S>): number;
        (arg0: Internal.CommandContext<S>): number;
        readonly SINGLE_SUCCESS: (1) & (number);
    }
    type Command_<S> = Command<S> | ((arg0: Internal.CommandContext<S>)=> number);
    interface LiquidBlockContainer {
        abstract canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        abstract placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
    }
    type LiquidBlockContainer_ = LiquidBlockContainer;
    class AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends Internal.AutoCookingUpgradeWrapper<Internal.AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper, Internal.AutoSmokingUpgradeItem, Internal.SmokingRecipe> {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        getInputFilterLogic(): Internal.FilterLogic;
        isInCooldown(arg0: Internal.Level_): boolean;
        tick(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        hideSettingsTab(): boolean;
        wait(): void;
        getCookingLogic(): Internal.CookingLogic<Internal.SmokingRecipe>;
        wait(arg0: number): void;
        getFuelFilterLogic(): Internal.FilterLogic;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get inputFilterLogic(): Internal.FilterLogic
        get enabled(): boolean
        get cooldownTime(): number
        get cookingLogic(): Internal.CookingLogic<Internal.SmokingRecipe>
        get fuelFilterLogic(): Internal.FilterLogic
    }
    type AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper_ = AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper;
    class WritingMode extends Internal.Enum<Internal.WritingMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getDeclaringClass(): typeof Internal.WritingMode;
        notifyAll(): void;
        "compareTo(com.electronwill.nightconfig.core.io.WritingMode)"(arg0: Internal.WritingMode_): number;
        static valueOf(arg0: string): Internal.WritingMode;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.WritingMode>>;
        hashCode(): number;
        compareTo(arg0: Internal.WritingMode_): number;
        static values(): Internal.WritingMode[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.WritingMode
        static readonly REPLACE: (Internal.WritingMode) & (Internal.WritingMode);
        static readonly APPEND: (Internal.WritingMode) & (Internal.WritingMode);
    }
    type WritingMode_ = "replace" | WritingMode | "append";
    class QuartzWrenchItem extends Internal.AEBaseItem {
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
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
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
        getRegistryName(): ResourceLocation;
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
        get registryName(): ResourceLocation
    }
    type QuartzWrenchItem_ = QuartzWrenchItem;
    class HashMap <K, V> extends Internal.AbstractMap<K, V> implements Internal.Cloneable, Internal.Map<K, V>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Map_<K, V>)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        clone(): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        getClass(): typeof any;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        toString(): string;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        notifyAll(): void;
        static newHashMap<K, V>(arg0: number): Internal.HashMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        abstract hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        wait(): void;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        wait(arg0: number): void;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get class(): typeof any
        get empty(): boolean
    }
    type HashMap_<K, V> = HashMap<K, V>;
    class RedStoneWireBlock extends Internal.Block {
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
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
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
        static getColorForPower(arg0: number): number;
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
        static readonly WEST: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly PROPERTY_BY_DIRECTION: ({[key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>}) & (Internal.Map<Internal.Direction, Internal.EnumProperty<Internal.RedstoneSide>>);
        static readonly NORTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly SOUTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly EAST: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly POWER: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type RedStoneWireBlock_ = RedStoneWireBlock;
    class QuickChargeEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
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
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type QuickChargeEnchantment_ = QuickChargeEnchantment;
    interface Multimap <K, V> {
        abstract keySet(): Internal.Set<K>;
        abstract replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.Collection<V>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        abstract get(arg0: K): Internal.Collection<V>;
        abstract removeAll(arg0: any): Internal.Collection<V>;
        abstract entries(): Internal.Collection<Internal.Map$Entry<K, V>>;
        abstract values(): Internal.Collection<V>;
        abstract containsValue(arg0: any): boolean;
        abstract remove(arg0: any, arg1: any): boolean;
        abstract isEmpty(): boolean;
        abstract containsEntry(arg0: any, arg1: any): boolean;
        abstract size(): number;
        abstract hashCode(): number;
        abstract containsKey(arg0: any): boolean;
        abstract putAll(arg0: Internal.Multimap_<K, V>): boolean;
        abstract put(arg0: K, arg1: V): boolean;
        abstract clear(): void;
        abstract putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        abstract equals(arg0: any): boolean;
        abstract keys(): Internal.Multiset<K>;
        abstract asMap(): Internal.Map<K, Internal.Collection<V>>;
        get empty(): boolean
    }
    type Multimap_<K, V> = Multimap<K, V>;
    interface ContainerEventHandler extends Internal.GuiEventListener {
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        abstract "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        setFocused(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        abstract setFocused(arg0: Internal.GuiEventListener_): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        "setFocused(boolean)"(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): Internal.ComponentPath;
        abstract setDragging(arg0: boolean): void;
        abstract children(): Internal.List<Internal.GuiEventListener>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        abstract isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        abstract getFocused(): Internal.GuiEventListener;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        get focused(): boolean
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        set focused(arg0: boolean)
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        set "focused(boolean)"(arg0: boolean)
        get currentFocusPath(): Internal.ComponentPath
        set dragging(arg0: boolean)
        get dragging(): boolean
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
    }
    type ContainerEventHandler_ = ContainerEventHandler;
    class EvaluatorException extends Internal.RhinoException {
        constructor(cx: Internal.Context_, detail: string, sourceName: string, lineNumber: number, lineSource: string, columnNumber: number)
        constructor(cx: Internal.Context_, detail: string, sourceName: string, lineNumber: number)
        constructor(cx: Internal.Context_, detail: string)
        getClass(): typeof any;
        "printStackTrace(java.io.PrintStream)"(s: Internal.PrintStream_): void;
        getMessage(): string;
        getScriptStackTrace(limit: number, functionName: string): string;
        sourceName(): string;
        initSourceName(sourceName: string): void;
        lineSource(): string;
        getCause(): Internal.Throwable;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        initLineNumber(lineNumber: number): void;
        getScriptStack(): any[];
        lineNumber(): number;
        initColumnNumber(columnNumber: number): void;
        initLineSource(lineSource: string): void;
        getSuppressed(): Internal.Throwable[];
        fillInStackTrace(): Internal.Throwable;
        addSuppressed(arg0: Internal.Throwable_): void;
        getScriptStack(limit: number, hideFunction: string): any[];
        setStackTrace(arg0: Internal.StackTraceElement_[]): void;
        printStackTrace(s: Internal.PrintStream_): void;
        getLocalizedMessage(): string;
        details(): string;
        toString(): string;
        notifyAll(): void;
        "printStackTrace(java.io.PrintWriter)"(s: Internal.PrintWriter_): void;
        getScriptStackTrace(): string;
        columnNumber(): number;
        getStackTrace(): Internal.StackTraceElement[];
        printStackTrace(s: Internal.PrintWriter_): void;
        hashCode(): number;
        wait(): void;
        printStackTrace(): void;
        initCause(arg0: Internal.Throwable_): Internal.Throwable;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get message(): string
        get cause(): Internal.Throwable
        get scriptStack(): any[]
        get suppressed(): Internal.Throwable[]
        set stackTrace(arg0: Internal.StackTraceElement_[])
        get localizedMessage(): string
        get scriptStackTrace(): string
        get stackTrace(): Internal.StackTraceElement[]
    }
    type EvaluatorException_ = EvaluatorException;
    class TallFlowerBlock extends Internal.DoublePlantBlock implements Internal.BonemealableBlock {
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
    type TallFlowerBlock_ = TallFlowerBlock;
    class ComparatorBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        setOutputSignal(arg0: number): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setTimeout(): void;
        isOutOfCamera(): boolean;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        onChunkUnloaded(): void;
        setOutOfCamera(value: boolean): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        isForcedVisible(): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getOutputSignal(): number;
        reviveCaps(): void;
        set outputSignal(arg0: number)
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        set culled(value: boolean)
        get outOfCamera(): boolean
        get blockState(): Internal.BlockState
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set outOfCamera(value: boolean)
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get persistentData(): Internal.CompoundTag
        get forcedVisible(): boolean
        get modelData(): Internal.ModelData
        get outputSignal(): number
    }
    type ComparatorBlockEntity_ = ComparatorBlockEntity;
    class FluixSmithingTemplateItem extends Internal.SmithingTemplateItem {
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
        static "createArmorTrimTemplate(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.TrimPattern>): Internal.SmithingTemplateItem;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getBaseSlotDescription(): net.minecraft.network.chat.Component;
        getAdditionSlotDescription(): net.minecraft.network.chat.Component;
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
        getBaseSlotEmptyIcons(): Internal.List<ResourceLocation>;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static "createArmorTrimTemplate(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.SmithingTemplateItem;
        static createNetheriteUpgradeIconList(): Internal.List<ResourceLocation>;
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
        static createTrimmableArmorIconList(): Internal.List<ResourceLocation>;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static createTrimmableMaterialIconList(): Internal.List<ResourceLocation>;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        getAdditionalSlotEmptyIcons(): Internal.List<ResourceLocation>;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        static createArmorTrimTemplate(arg0: Internal.ResourceKey_<Internal.TrimPattern>): Internal.SmithingTemplateItem;
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
        static createNetheriteUpgradeMaterialList(): Internal.List<ResourceLocation>;
        static createNetheriteUpgradeTemplate(): Internal.SmithingTemplateItem;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        static createArmorTrimTemplate(arg0: ResourceLocation_): Internal.SmithingTemplateItem;
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
        get baseSlotDescription(): net.minecraft.network.chat.Component
        get additionSlotDescription(): net.minecraft.network.chat.Component
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
        get baseSlotEmptyIcons(): Internal.List<ResourceLocation>
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
        get additionalSlotEmptyIcons(): Internal.List<ResourceLocation>
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
    type FluixSmithingTemplateItem_ = FluixSmithingTemplateItem;
    interface SlotMixin {
        abstract merequester$setY(arg0: number): void;
        abstract merequester$setX(arg0: number): void;
    }
    type SlotMixin_ = SlotMixin;
    interface IRecipeCategory <T> {
        onDisplayedIngredientsUpdate(arg0: T, arg1: Internal.List_<Internal.IRecipeSlotDrawable>, arg2: Internal.IFocusGroup_): void;
        getWidth(): number;
        getRegistryName(arg0: T): ResourceLocation;
        abstract getRecipeType(): mezz.jei.api.recipe.RecipeType<T>;
        draw(arg0: T, arg1: Internal.IRecipeSlotsView_, arg2: Internal.GuiGraphics_, arg3: number, arg4: number): void;
        isHandled(arg0: T): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getBackground(): Internal.IDrawable;
        abstract getTitle(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        handleInput(arg0: T, arg1: number, arg2: number, arg3: Internal.InputConstants$Key_): boolean;
        abstract setRecipe(arg0: Internal.IRecipeLayoutBuilder_, arg1: T, arg2: Internal.IFocusGroup_): void;
        getHeight(): number;
        abstract getIcon(): Internal.IDrawable;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTooltipStrings(arg0: T, arg1: Internal.IRecipeSlotsView_, arg2: number, arg3: number): Internal.List<net.minecraft.network.chat.Component>;
        getTooltip(arg0: Internal.ITooltipBuilder_, arg1: T, arg2: Internal.IRecipeSlotsView_, arg3: number, arg4: number): void;
        createRecipeExtras(arg0: Internal.IRecipeExtrasBuilder_, arg1: T, arg2: Internal.IFocusGroup_): void;
        get width(): number
        get recipeType(): mezz.jei.api.recipe.RecipeType<T>
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get background(): Internal.IDrawable
        get title(): net.minecraft.network.chat.Component
        get height(): number
        get icon(): Internal.IDrawable
    }
    type IRecipeCategory_<T> = IRecipeCategory<T>;
    interface PlayerKJS extends Internal.DataSenderKJS, Internal.WithAttachedData<Internal.Player>, Internal.LivingEntityKJS {
        getDistance(pos: BlockPos_): number;
        isFake(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        addFood(f: number, m: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        getXpLevel(): number;
        setSelectedSlot(index: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        paint(renderer: Internal.CompoundTag_): void;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getFoodLevel(): number;
        notify(title: net.minecraft.network.chat.Component_, text: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        setXpLevel(l: number): void;
        getCraftingGrid(): Internal.InventoryKJS;
        setFoodLevel(foodLevel: number): void;
        setSaturation(saturation: number): void;
        addXPLevels(l: number): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getReachDistance(): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        sendData(channel: string): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        getXp(): number;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setXp(xp: number): void;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        isMiningBlock(): boolean;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        isAmbientCreature(): boolean;
        notify(builder: Notification_): void;
        getInventoryChangeListener(): Internal.KubeJSInventoryListener;
        isMonster(): boolean;
        getType(): string;
        self(): Internal.Entity;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getStages(): Internal.Stages;
        getName(): net.minecraft.network.chat.Component;
        boostElytraFlight(): void;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        addXP(xp: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        give(item: Internal.ItemStack_): void;
        getInventory(): Internal.InventoryKJS;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        sendInventoryUpdate(): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        abstract getData(): Internal.AttachedData<Internal.Player>;
        getProfile(): Internal.GameProfile;
        getSaturation(): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get fake(): boolean
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get xpLevel(): number
        set selectedSlot(index: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get foodLevel(): number
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set xpLevel(l: number)
        get craftingGrid(): Internal.InventoryKJS
        set foodLevel(foodLevel: number)
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        set x(x: number)
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get xp(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        get defaultMovementSpeed(): number
        get miningBlock(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get inventoryChangeListener(): Internal.KubeJSInventoryListener
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get stages(): Internal.Stages
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get inventory(): Internal.InventoryKJS
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get data(): Internal.AttachedData<Internal.Player>
        get profile(): Internal.GameProfile
        get saturation(): number
        set headArmorItem(item: Internal.ItemStack_)
        (): Internal.AttachedData_<Internal.Player>;
    }
    type PlayerKJS_ = (()=> Internal.AttachedData_<Internal.Player>) | PlayerKJS;
    class PropertyParam extends Internal.AbstractProperty<Internal.PropertyParam> {
        constructor()
        constructor(name: string, type: Internal.PropertyType_<any>, isVarArg: boolean)
        getClass(): typeof any;
        merge(other: Internal.PropertyParam_): this;
        getType(): Internal.PropertyType<any>;
        copy(): Internal.AbstractDocumentBase<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fulfillsConditions(): boolean;
        isVarArg(): boolean;
        getName(): string;
        deserialize(object: Internal.JsonObject_): void;
        addPropertyJson(json: Internal.JsonObject_): Internal.AbstractDocumentBase<Internal.PropertyParam>;
        applyProperties(): this;
        toString(): string;
        notifyAll(): void;
        serialize(): Internal.JsonObject;
        isHidden(): boolean;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        static fromJava(info: Internal.MethodInfo$ParamInfo_): Internal.PropertyParam;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        hashCode(): number;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        get class(): typeof any
        get type(): Internal.PropertyType<any>
        get varArg(): boolean
        get name(): string
        get hidden(): boolean
    }
    type PropertyParam_ = PropertyParam;
    abstract class AbstractLayout <L extends Internal.AbstractLayout<L> & Internal.MemoryLayout> {
        getClass(): typeof any;
        abstract toString(): string;
        name(): Internal.Optional<string>;
        notifyAll(): void;
        byteSize(): number;
        withByteAlignment(arg0: number): L;
        withName(arg0: string): L;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        withoutName(): L;
        hasNaturalAlignment(): boolean;
        wait(): void;
        byteAlignment(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AbstractLayout_<L extends Internal.AbstractLayout<L> & Internal.MemoryLayout> = AbstractLayout<L>;
    class CrafterCorePlusBlock extends Internal.BlockAssemblerMatrixBase<Internal.CrafterCorePlusBlockEntity> {
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
        setBlockEntity(arg0: typeof Internal.CrafterCorePlusBlockEntity, arg1: Internal.BlockEntityType_<Internal.CrafterCorePlusBlockEntity>, arg2: Internal.BlockEntityTicker_<Internal.CrafterCorePlusBlockEntity>, arg3: Internal.BlockEntityTicker_<Internal.CrafterCorePlusBlockEntity>): void;
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
        check(arg0: Internal.CrafterCorePlusBlockEntity_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
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
        "check(appeng.blockentity.AEBaseBlockEntity,net.minecraft.world.item.ItemStack,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.phys.BlockHitResult,net.minecraft.world.entity.player.Player)"(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "openGui(com.extendedae_plus.content.matrix.CrafterCorePlusBlockEntity,net.minecraft.world.entity.player.Player)"(arg0: Internal.CrafterCorePlusBlockEntity_, arg1: Internal.Player_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        "check(com.extendedae_plus.content.matrix.CrafterCorePlusBlockEntity,net.minecraft.world.item.ItemStack,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.phys.BlockHitResult,net.minecraft.world.entity.player.Player)"(arg0: Internal.CrafterCorePlusBlockEntity_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
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
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.CrafterCorePlusBlockEntity;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        openGui(arg0: Internal.CrafterCorePlusBlockEntity_, arg1: Internal.Player_): void;
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
        check(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.CrafterCorePlusBlockEntity>;
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.CrafterCorePlusBlockEntity;
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
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getPresentItem(): Internal.Item;
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
        get blockEntityType(): Internal.BlockEntityType<Internal.CrafterCorePlusBlockEntity>
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get presentItem(): Internal.Item
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type CrafterCorePlusBlock_ = CrafterCorePlusBlock;
    abstract class WoodStorageBlockBase extends Internal.StorageBlockBase implements Internal.IAdditionalDropDataBlock {
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
        getNeighborPos(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.List<BlockPos>;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        static "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.minecraft.world.item.ItemStack,net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
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
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
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
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        addDropData(arg0: Internal.ItemStack_, arg1: Internal.StorageBlockEntity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getHorizontalDirection(arg0: Internal.BlockState_): Internal.Direction;
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
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getVerticalFacing(arg0: Internal.BlockState_): Internal.VerticalFacing;
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
        trySneakItemInteraction(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockState_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_, arg6: Internal.ItemStack_): boolean;
        static tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
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
        setTicking(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
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
        abstract "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getNumberOfInventorySlots(): number;
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
        "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity,net.minecraft.world.item.ItemStack)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
        tryFillUpgrades(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.ItemStack_): boolean;
        getDisplayItemsCount(arg0: Internal.List_<Internal.RenderInfo$DisplayItem>): number;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
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
        getNumberOfUpgradeSlots(): number;
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
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
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        hasFixedIndexDisplayItems(): boolean;
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
        abstract getFacing(arg0: Internal.BlockState_): Internal.Direction;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        addNameWoodAndTintData(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: BlockPos_): void;
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
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getBaseStackSizeMultiplier(): number;
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
        get numberOfInventorySlots(): number
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        get numberOfUpgradeSlots(): number
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get baseStackSizeMultiplier(): number
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly CUSTOM_TEXTURE_WOOD_TYPES: ({[key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily, [key: Internal.WoodType]: Internal.BlockFamily}) & (Internal.Map<Internal.WoodType, Internal.BlockFamily>);
    }
    type WoodStorageBlockBase_ = WoodStorageBlockBase;
    class IndustrialTNTBlock extends Internal.GTExplosiveBlock {
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
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
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
        explode(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_): void;
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
    type IndustrialTNTBlock_ = IndustrialTNTBlock;
    class DataPackRegistryEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
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
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type DataPackRegistryEvent_ = DataPackRegistryEvent;
    /**
     * Invoked when the debug info is rendered.
    */
    class DebugInfoEventJS extends Internal.ClientEventJS {
        constructor(l: Internal.List_<string>)
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
        toString(): string;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        /**
         * The lines of debug info. Mutating this list will change the debug info.
        */
        getLines(): Internal.List<string>;
        notify(): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
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
         * Whether the debug info should be rendered.
        */
        getShowDebug(): boolean;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getPlayer(): Internal.LocalPlayer;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        /**
         * The lines of debug info. Mutating this list will change the debug info.
        */
        get lines(): Internal.List<string>
        get level(): Internal.Level
        get entity(): Internal.Entity
        /**
         * Whether the debug info should be rendered.
        */
        get showDebug(): boolean
        get player(): Internal.LocalPlayer
        get server(): Internal.MinecraftServer
    }
    type DebugInfoEventJS_ = DebugInfoEventJS;
    class UserType extends Internal.Enum<Internal.UserType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(com.mojang.authlib.UserType)"(arg0: Internal.UserType_): number;
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.UserType>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static valueOf(arg0: string): Internal.UserType;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.UserType;
        hashCode(): number;
        static values(): Internal.UserType[];
        static byName(arg0: string): Internal.UserType;
        ordinal(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.UserType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.UserType
        get name(): string
        static readonly MOJANG: (Internal.UserType) & (Internal.UserType);
        static readonly LEGACY: (Internal.UserType) & (Internal.UserType);
    }
    type UserType_ = "mojang" | "legacy" | UserType;
    class ChemicalCrystallizerRecipeSerializer <RECIPE extends Internal.ChemicalCrystallizerRecipe> implements Internal.RecipeSerializer<RECIPE> {
        constructor(factory: any_<RECIPE>)
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(buffer: Internal.FriendlyByteBuf_, recipe: Internal.Recipe_<any>): void;
        notifyAll(): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): RECIPE;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(recipeId: ResourceLocation_, json: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        fromJson(recipeId: ResourceLocation_, json: Internal.JsonObject_): RECIPE;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: RECIPE): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(recipeId: ResourceLocation_, json: Internal.JsonObject_): RECIPE;
        fromJson(recipeId: ResourceLocation_, json: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): RECIPE;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,mekanism.api.recipes.ChemicalCrystallizerRecipe)"(buffer: Internal.FriendlyByteBuf_, recipe: RECIPE): void;
        wait(): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): RECIPE;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type ChemicalCrystallizerRecipeSerializer_<RECIPE extends Internal.ChemicalCrystallizerRecipe> = ChemicalCrystallizerRecipeSerializer<RECIPE>;
    interface AttachInfo$Callbacks {
        abstract performHapticFeedback(arg0: number, arg1: boolean): boolean;
        abstract playSoundEffect(arg0: number): void;
    }
    type AttachInfo$Callbacks_ = AttachInfo$Callbacks;
    class WallTorchBlock extends Internal.TorchBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ParticleOptions_)
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
        static getShape(arg0: Internal.BlockState_): Internal.VoxelShape;
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
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type WallTorchBlock_ = WallTorchBlock;
    abstract class WrappedShapedRecipe implements Internal.CraftingRecipe, Internal.IShapedRecipe<Internal.CraftingContainer> {
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(inv: Internal.CraftingContainer_, world: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(inv: Internal.CraftingContainer_, world: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(inv: net.minecraft.world.Container_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        getRemainingItems(inv: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract assemble(inv: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(inv: net.minecraft.world.Container_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(inv: net.minecraft.world.Container_, world: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "getRemainingItems(net.minecraft.world.inventory.CraftingContainer)"(inv: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getRecipeWidth(): number;
        getRemainingItems(inv: net.minecraft.world.Container_): Internal.NonNullList<any>;
        abstract "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(inv: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(width: number, height: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(inv: net.minecraft.world.Container_, world: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        "getRemainingItems(net.minecraft.world.Container)"(inv: net.minecraft.world.Container_): Internal.NonNullList<any>;
        getRecipeHeight(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        getInternal(): Internal.ShapedRecipe;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get recipeWidth(): number
        get type(): ResourceLocation
        set group(group: string)
        get recipeHeight(): number
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get internal(): Internal.ShapedRecipe
    }
    type WrappedShapedRecipe_ = WrappedShapedRecipe;
    class ServerboundContainerClosePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        getContainerId(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get containerId(): number
        get skippable(): boolean
    }
    type ServerboundContainerClosePacket_ = ServerboundContainerClosePacket;
    interface TypeWrapperFactory <T> {
        abstract wrap(arg0: Internal.Context_, arg1: any): T;
        (arg0: Internal.Context, arg1: any): T;
    }
    type TypeWrapperFactory_<T> = TypeWrapperFactory<T> | ((arg0: Internal.Context, arg1: any)=> T);
    abstract class ServerSocketChannel extends Internal.AbstractSelectableChannel implements Internal.NetworkChannel {
        getClass(): typeof any;
        blockingLock(): any;
        abstract setOption<T>(arg0: Internal.SocketOption_<T>, arg1: T): this;
        abstract getLocalAddress(): Internal.SocketAddress;
        static open(): Internal.ServerSocketChannel;
        register(arg0: Internal.Selector_, arg1: number, arg2: any): Internal.SelectionKey;
        isBlocking(): boolean;
        keyFor(arg0: Internal.Selector_): Internal.SelectionKey;
        provider(): Internal.SelectorProvider;
        validOps(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract isOpen(): boolean;
        configureBlocking(arg0: boolean): Internal.SelectableChannel;
        static open(arg0: Internal.ProtocolFamily_): Internal.ServerSocketChannel;
        register(arg0: Internal.Selector_, arg1: number): Internal.SelectionKey;
        abstract socket(): Internal.ServerSocket;
        toString(): string;
        abstract bind(arg0: Internal.SocketAddress_, arg1: number): this;
        abstract accept(): Internal.SocketChannel;
        notifyAll(): void;
        isRegistered(): boolean;
        hashCode(): number;
        wait(): void;
        abstract close(): void;
        wait(arg0: number): void;
        bind(arg0: Internal.SocketAddress_): Internal.NetworkChannel;
        abstract supportedOptions(): Internal.Set<Internal.SocketOption<any>>;
        abstract getOption<T>(arg0: Internal.SocketOption_<T>): T;
        equals(arg0: any): boolean;
        get class(): typeof any
        get localAddress(): Internal.SocketAddress
        get blocking(): boolean
        get open(): boolean
        get registered(): boolean
    }
    type ServerSocketChannel_ = ServerSocketChannel;
    class StringListEntry extends Internal.TextFieldListEntry<string> {
        constructor(fieldName: net.minecraft.network.chat.Component_, value: string, resetButtonKey: net.minecraft.network.chat.Component_, defaultValue: Internal.Supplier_<string>, saveConsumer: Internal.Consumer_<string>, tooltipSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component[]>>, requiresRestart: boolean)
        constructor(fieldName: net.minecraft.network.chat.Component_, value: string, resetButtonKey: net.minecraft.network.chat.Component_, defaultValue: Internal.Supplier_<string>, saveConsumer: Internal.Consumer_<string>, tooltipSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component[]>>)
        constructor(fieldName: net.minecraft.network.chat.Component_, value: string, resetButtonKey: net.minecraft.network.chat.Component_, defaultValue: Internal.Supplier_<string>, saveConsumer: Internal.Consumer_<string>)
        setReferenceProviderEntries(referencableEntries: Internal.List_<Internal.ReferenceProvider<any>>): void;
        charTyped(c: string, i: number): boolean;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(guiEventListener: Internal.GuiEventListener_): void;
        setTooltipSupplier(tooltipSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component[]>>): void;
        setFocused(arg0: boolean): void;
        setErrorSupplier(errorSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component>>): void;
        mouseClicked(d: number, e: number, i: number): boolean;
        keyReleased(i: number, j: number, k: number): boolean;
        notify(): void;
        addTooltip(tooltip: me.shedaniel.clothconfig2.api.Tooltip_): void;
        getEntryArea(x: number, y: number, entryWidth: number, entryHeight: number): me.shedaniel.math.Rectangle;
        setRequiresRestart(requiresRestart: boolean): void;
        getConfigError(): Internal.Optional<net.minecraft.network.chat.Component>;
        render(graphics: Internal.GuiGraphics_, index: number, y: number, x: number, entryWidth: number, entryHeight: number, mouseX: number, mouseY: number, isHovered: boolean, delta: number): void;
        setDisplayRequirement(requirement: Internal.Requirement_): void;
        getRequirement(): Internal.Requirement;
        isMouseInside(mouseX: number, mouseY: number, x: number, y: number, entryWidth: number, entryHeight: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getDefaultValue(): Internal.Optional<string>;
        getRectangle(): Internal.ScreenRectangle;
        getFocused(): Internal.GuiEventListener;
        nextFocusPath(focusNavigationEvent: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        getError(): Internal.Optional<net.minecraft.network.chat.Component>;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        getValue(): string;
        updateSelected(isSelected: boolean): void;
        getConfigScreen(): Internal.AbstractConfigScreen;
        keyPressed(i: number, j: number, k: number): boolean;
        tick(): void;
        getTooltip(mouseX: number, mouseY: number): Internal.Optional<net.minecraft.network.chat.Component[]>;
        getReferenceProviderEntries(): Internal.List<Internal.ReferenceProvider<any>>;
        /**
         * @deprecated
        */
        getMorePossibleHeight(): number;
        getPreferredTextColor(): number;
        getInitialReferenceOffset(): number;
        setParent(parent: Internal.DynamicEntryListWidget_<Internal.AbstractConfigEntry<T>>): void;
        /**
         * @deprecated
        */
        setValue(s: string): void;
        isEditable(): boolean;
        setDragging(bl: boolean): void;
        wait(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        appendSearchTags(tags: Internal.Iterable_<string>): void;
        setEditable(editable: boolean): void;
        lateRender(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, delta: number): void;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        setRequirement(requirement: Internal.Requirement_): void;
        provideReferenceEntry(): Internal.AbstractConfigEntry<string>;
        isMouseOver(double_1: number, double_2: number): boolean;
        getClass(): typeof any;
        getFieldName(): net.minecraft.network.chat.Component;
        isFocused(): boolean;
        getTooltip(): Internal.Optional<net.minecraft.network.chat.Component[]>;
        isActive(): boolean;
        getTabOrderGroup(): number;
        setFocused(guiEventListener: Internal.GuiEventListener_): void;
        mouseScrolled(d: number, e: number, f: number): boolean;
        wait(arg0: number, arg1: number): void;
        isRequiresRestart(): boolean;
        isEnabled(): boolean;
        getTooltipSupplier(): Internal.Supplier<Internal.Optional<net.minecraft.network.chat.Component[]>>;
        narratables(): Internal.List<Internal.NarratableEntry>;
        requestReferenceRebuilding(): void;
        mouseDragged(d: number, e: number, i: number, f: number, g: number): boolean;
        isDisplayed(): boolean;
        getItemHeight(): number;
        focusPathAtIndex(focusNavigationEvent: Internal.FocusNavigationEvent_, i: number): Internal.ComponentPath;
        isEdited(): boolean;
        toString(): string;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(d: number, e: number, i: number): boolean;
        "setFocused(boolean)"(arg0: boolean): void;
        save(): void;
        setScreen(screen: Internal.AbstractConfigScreen_): void;
        getDisplayRequirement(): Internal.Requirement;
        hashCode(): number;
        getCurrentFocusPath(): Internal.ComponentPath;
        getSearchTags(): Internal.Iterator<string>;
        updateNarration(narrationElementOutput: Internal.NarrationElementOutput_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getParent(): Internal.DynamicEntryListWidget<Internal.AbstractConfigEntry<T>>;
        getDisplayedFieldName(): net.minecraft.network.chat.Component;
        set referenceProviderEntries(referencableEntries: Internal.List_<Internal.ReferenceProvider<any>>)
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(guiEventListener: Internal.GuiEventListener_)
        set tooltipSupplier(tooltipSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component[]>>)
        set focused(arg0: boolean)
        set errorSupplier(errorSupplier: Internal.Supplier_<Internal.Optional<net.minecraft.network.chat.Component>>)
        set requiresRestart(requiresRestart: boolean)
        get configError(): Internal.Optional<net.minecraft.network.chat.Component>
        set displayRequirement(requirement: Internal.Requirement_)
        get requirement(): Internal.Requirement
        get defaultValue(): Internal.Optional<string>
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
        get error(): Internal.Optional<net.minecraft.network.chat.Component>
        get value(): string
        get configScreen(): Internal.AbstractConfigScreen
        get referenceProviderEntries(): Internal.List<Internal.ReferenceProvider<any>>
        /**
         * @deprecated
        */
        get morePossibleHeight(): number
        get preferredTextColor(): number
        get initialReferenceOffset(): number
        set parent(parent: Internal.DynamicEntryListWidget_<Internal.AbstractConfigEntry<T>>)
        /**
         * @deprecated
        */
        set value(s: string)
        get editable(): boolean
        set dragging(bl: boolean)
        set editable(editable: boolean)
        get dragging(): boolean
        set requirement(requirement: Internal.Requirement_)
        get class(): typeof any
        get fieldName(): net.minecraft.network.chat.Component
        get focused(): boolean
        get tooltip(): Internal.Optional<net.minecraft.network.chat.Component[]>
        get active(): boolean
        get tabOrderGroup(): number
        set focused(guiEventListener: Internal.GuiEventListener_)
        get requiresRestart(): boolean
        get enabled(): boolean
        get tooltipSupplier(): Internal.Supplier<Internal.Optional<net.minecraft.network.chat.Component[]>>
        get displayed(): boolean
        get itemHeight(): number
        get edited(): boolean
        set "focused(boolean)"(arg0: boolean)
        set screen(screen: Internal.AbstractConfigScreen_)
        get displayRequirement(): Internal.Requirement
        get currentFocusPath(): Internal.ComponentPath
        get searchTags(): Internal.Iterator<string>
        get parent(): Internal.DynamicEntryListWidget<Internal.AbstractConfigEntry<T>>
        get displayedFieldName(): net.minecraft.network.chat.Component
    }
    type StringListEntry_ = StringListEntry;
    abstract class NumericTag implements Internal.Tag, Internal.SpecialEquality {
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        abstract "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        abstract sizeInBytes(): number;
        abstract getAsLong(): number;
        abstract getAsFloat(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        abstract write(arg0: Internal.DataOutput_): void;
        abstract getId(): number;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        abstract getAsDouble(): number;
        abstract accept(arg0: Internal.TagVisitor_): void;
        abstract getAsInt(): number;
        getAsString(): string;
        abstract getType(): Internal.TagType<any>;
        hashCode(): number;
        abstract getAsByte(): number;
        abstract getAsNumber(): number;
        abstract copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        abstract getAsShort(): number;
        equals(arg0: any): boolean;
        abstract accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asLong(): number
        get asFloat(): number
        get id(): number
        get asDouble(): number
        get asInt(): number
        get asString(): string
        get type(): Internal.TagType<any>
        get asByte(): number
        get asNumber(): number
        get asShort(): number
    }
    type NumericTag_ = NumericTag;
    class ServerPlayerGameMode {
        constructor(arg0: Internal.ServerPlayer_)
        getClass(): typeof any;
        getGameModeForPlayer(): Internal.GameType;
        toString(): string;
        useItemOn(arg0: Internal.ServerPlayer_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: Internal.InteractionHand_, arg4: Internal.BlockHitResult_): Internal.InteractionResult;
        isSurvival(): boolean;
        getPreviousGameModeForPlayer(): Internal.GameType;
        notifyAll(): void;
        changeGameModeForPlayer(arg0: Internal.GameType_): boolean;
        handleBlockBreakAction(arg0: BlockPos_, arg1: Internal.ServerboundPlayerActionPacket$Action_, arg2: Internal.Direction_, arg3: number, arg4: number): void;
        destroyAndAck(arg0: BlockPos_, arg1: number, arg2: string): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        setLevel(arg0: Internal.ServerLevel_): void;
        hashCode(): number;
        isCreative(): boolean;
        wait(): void;
        wait(arg0: number): void;
        destroyBlock(arg0: BlockPos_): boolean;
        equals(arg0: any): boolean;
        useItem(arg0: Internal.ServerPlayer_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        get class(): typeof any
        get gameModeForPlayer(): Internal.GameType
        get survival(): boolean
        get previousGameModeForPlayer(): Internal.GameType
        set level(arg0: Internal.ServerLevel_)
        get creative(): boolean
        isDestroyingBlock: boolean;
    }
    type ServerPlayerGameMode_ = ServerPlayerGameMode;
    class LongOpenHashSet extends Internal.AbstractLongSet implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor()
        constructor(arg0: number[])
        constructor(arg0: Internal.Iterator_<any>)
        constructor(arg0: number)
        constructor(arg0: Internal.Iterator_<any>, arg1: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.LongCollection_)
        constructor(arg0: Internal.Collection_<number>)
        constructor(arg0: Internal.LongIterator_, arg1: number)
        constructor(arg0: Internal.Collection_<number>, arg1: number)
        constructor(arg0: number[], arg1: number)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: Internal.LongIterator_)
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.LongCollection_, arg1: number)
        remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        static "of(long,long,long)"(arg0: number, arg1: number, arg2: number): Internal.LongOpenHashSet;
        trim(arg0: number): boolean;
        static of(arg0: number): Internal.LongOpenHashSet;
        static of(): Internal.LongOpenHashSet;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        trim(): boolean;
        addAll(arg0: Internal.LongCollection_): boolean;
        "remove(long)"(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        "removeIf(it.unimi.dsi.fastutil.longs.LongPredicate)"(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        static toSet(arg0: Internal.LongStream_): Internal.LongOpenHashSet;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        longSpliterator(): Internal.LongSpliterator;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        "forEach(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): void;
        getClass(): typeof any;
        iterator(): Internal.LongIterator;
        longIterator(): Internal.LongIterator;
        "contains(long)"(arg0: number): boolean;
        static "of(long)"(arg0: number): Internal.LongOpenHashSet;
        /**
         * @deprecated
        */
        toLongArray(arg0: number[]): number[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        toArray(arg0: number[]): number[];
        static "of(long,long)"(arg0: number, arg1: number): Internal.LongOpenHashSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static of(arg0: number, arg1: number): Internal.LongOpenHashSet;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        "add(long)"(arg0: number): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        toString(): string;
        notifyAll(): void;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        size(): number;
        toLongArray(): number[];
        longParallelStream(): Internal.LongStream;
        clear(): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        static of(arg0: number, arg1: number, arg2: number): Internal.LongOpenHashSet;
        "removeIf(java.util.function.LongPredicate)"(arg0: Internal.LongPredicate_): boolean;
        removeIf(arg0: Internal.LongPredicate_): boolean;
        notify(): void;
        static toSetWithExpectedSize(arg0: Internal.LongStream_, arg1: number): Internal.LongOpenHashSet;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        retainAll(arg0: Internal.LongCollection_): boolean;
        "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        forEach(arg0: Internal.LongConsumer_): void;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        clone(): this;
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        removeAll(arg0: Internal.LongCollection_): boolean;
        containsAll(arg0: Internal.LongCollection_): boolean;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "addAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        "toArray(long[])"(arg0: number[]): number[];
        "removeAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        add(arg0: number): boolean;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        addAll(arg0: Internal.Collection_<number>): boolean;
        wait(arg0: number, arg1: number): void;
        "retainAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        static of(...arg0: number[]): Internal.LongOpenHashSet;
        /**
         * @deprecated
        */
        "add(java.lang.Long)"(arg0: number): boolean;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        static "of(long[])"(...arg0: number[]): Internal.LongOpenHashSet;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        "containsAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        contains(arg0: number): boolean;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract toArray(): any[];
        "forEach(it.unimi.dsi.fastutil.longs.LongConsumer)"(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        hashCode(): number;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        longStream(): Internal.LongStream;
        equals(arg0: any): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type LongOpenHashSet_ = LongOpenHashSet;
    class ClientboundSetEntityDataPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.List_<Internal.SynchedEntityData$DataValue<any>>)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        packedItems(): Internal.List<Internal.SynchedEntityData$DataValue<any>>;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        id(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        static readonly EOF_MARKER: (255) & (number);
    }
    type ClientboundSetEntityDataPacket_ = ClientboundSetEntityDataPacket;
    class ClipStack {
        constructor(device: Internal.GraniteDevice_)
        getClass(): typeof any;
        maxDeferredClipDraws(): number;
        currentClipState(): number;
        toString(): string;
        static getClipGeometry(A: Internal.ClipStack$ClipGeometry_, B: Internal.ClipStack$ClipGeometry_): number;
        restore(): void;
        notifyAll(): void;
        clipRect(viewMatrix: Internal.Matrixc_, localRect: Internal.Rect2fc_, clipOp: number): void;
        prepareForDraw<GEO>(draw: Internal.Draw_, geometry: GEO, boundsFn: Internal.BiConsumer_<GEO, Internal.Rect2f>, outsetBoundsForAA: boolean, elementsForMask: Internal.List_<Internal.ClipStack$Element>): boolean;
        updateForDraw(draw: Internal.Draw_, elementsForMask: Internal.List_<Internal.ClipStack$Element>, boundsManager: Internal.BoundsManager_, depth: number): number;
        static intersects(A: Internal.ClipStack$ClipGeometry_, B: Internal.ClipStack$ClipGeometry_): boolean;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        getConservativeBounds(out: Internal.Rect2f_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        recordDeferredClipDraws(): void;
        elements(): Internal.Collection<Internal.ClipStack$Element>;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly STATE_EMPTY: (0) & (number);
        static readonly OP_DIFFERENCE: (0) & (number);
        static readonly OP_INTERSECT: (1) & (number);
        static readonly STATE_COMPLEX: (3) & (number);
        static readonly CLIP_GEOMETRY_EMPTY: (0) & (number);
        static readonly CLIP_GEOMETRY_B_ONLY: (2) & (number);
        static readonly CLIP_GEOMETRY_BOTH: (3) & (number);
        static readonly STATE_DEVICE_RECT: (2) & (number);
        static readonly STATE_WIDE_OPEN: (1) & (number);
        static readonly CLIP_GEOMETRY_A_ONLY: (1) & (number);
    }
    type ClipStack_ = ClipStack;
    abstract class ColorModel implements Internal.Transparency {
        constructor(arg0: number)
        createCompatibleSampleModel(arg0: number, arg1: number): Internal.SampleModel;
        getComponentSize(arg0: number): number;
        "getDataElements(int[],int,java.lang.Object)"(arg0: number[], arg1: number, arg2: any): any;
        getPixelSize(): number;
        abstract "getBlue(int)"(arg0: number): number;
        "getRGB(java.lang.Object)"(arg0: any): number;
        notify(): void;
        getColorSpace(): Internal.ColorSpace;
        getBlue(arg0: any): number;
        getNumColorComponents(): number;
        getAlphaRaster(arg0: Internal.WritableRaster_): Internal.WritableRaster;
        getDataElement(arg0: number[], arg1: number): number;
        "getGreen(java.lang.Object)"(arg0: any): number;
        "getDataElements(float[],int,java.lang.Object)"(arg0: number[], arg1: number, arg2: any): any;
        getRGB(arg0: any): number;
        isCompatibleSampleModel(arg0: Internal.SampleModel_): boolean;
        getComponents(arg0: any, arg1: number[], arg2: number): number[];
        abstract "getAlpha(int)"(arg0: number): number;
        "getComponents(java.lang.Object,int[],int)"(arg0: any, arg1: number[], arg2: number): number[];
        abstract getAlpha(arg0: number): number;
        abstract "getRed(int)"(arg0: number): number;
        "getAlpha(java.lang.Object)"(arg0: any): number;
        "getComponents(int,int[],int)"(arg0: number, arg1: number[], arg2: number): number[];
        getDataElements(arg0: number[], arg1: number, arg2: any): any;
        wait(): void;
        isCompatibleRaster(arg0: Internal.Raster_): boolean;
        static getRGBdefault(): Internal.ColorModel;
        getTransparency(): number;
        getRGB(arg0: number): number;
        getClass(): typeof any;
        getRed(arg0: any): number;
        "getRed(java.lang.Object)"(arg0: any): number;
        getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        abstract getGreen(arg0: number): number;
        getComponentSize(): number[];
        hasAlpha(): boolean;
        getDataElement(arg0: number[], arg1: number): number;
        wait(arg0: number, arg1: number): void;
        "getBlue(java.lang.Object)"(arg0: any): number;
        getNumComponents(): number;
        createCompatibleWritableRaster(arg0: number, arg1: number): Internal.WritableRaster;
        getAlpha(arg0: any): number;
        getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getTransferType(): number;
        abstract getBlue(arg0: number): number;
        "getDataElement(int[],int)"(arg0: number[], arg1: number): number;
        toString(): string;
        isAlphaPremultiplied(): boolean;
        "getDataElement(float[],int)"(arg0: number[], arg1: number): number;
        getNormalizedComponents(arg0: any, arg1: number[], arg2: number): number[];
        notifyAll(): void;
        abstract "getGreen(int)"(arg0: number): number;
        hashCode(): number;
        coerceData(arg0: Internal.WritableRaster_, arg1: boolean): this;
        getGreen(arg0: any): number;
        "getRGB(int)"(arg0: number): number;
        getComponents(arg0: number, arg1: number[], arg2: number): number[];
        wait(arg0: number): void;
        getDataElements(arg0: number[], arg1: number, arg2: any): any;
        getDataElements(arg0: number, arg1: any): any;
        abstract getRed(arg0: number): number;
        equals(arg0: any): boolean;
        get pixelSize(): number
        get colorSpace(): Internal.ColorSpace
        get numColorComponents(): number
        get RGBdefault(): Internal.ColorModel
        get transparency(): number
        get class(): typeof any
        get componentSize(): number[]
        get numComponents(): number
        get transferType(): number
        get alphaPremultiplied(): boolean
    }
    type ColorModel_ = ColorModel;
    interface ISecurityObject extends Internal.IOwnerObject {
        abstract getOwnerName(): string;
        abstract getSecurityMode(): Internal.SecurityMode;
        ownerMatches(arg0: Internal.Player_): boolean;
        abstract setOwnerUUID(arg0: Internal.UUID_): void;
        abstract getOwnerUUID(): Internal.UUID;
        abstract setSecurityMode(arg0: Internal.SecurityMode_): void;
        onSecurityChanged(arg0: Internal.SecurityMode_, arg1: Internal.SecurityMode_): void;
        get ownerName(): string
        get securityMode(): Internal.SecurityMode
        set ownerUUID(arg0: Internal.UUID_)
        get ownerUUID(): Internal.UUID
        set securityMode(arg0: Internal.SecurityMode_)
    }
    type ISecurityObject_ = ISecurityObject;
    class DragSourceDragEvent extends Internal.DragSourceEvent {
        constructor(arg0: Internal.DragSourceContext_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.DragSourceContext_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getClass(): typeof any;
        getX(): number;
        toString(): string;
        getY(): number;
        getDragSourceContext(): Internal.DragSourceContext;
        notifyAll(): void;
        getGestureModifiers(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getTargetActions(): number;
        getUserAction(): number;
        getGestureModifiersEx(): number;
        wait(): void;
        wait(arg0: number): void;
        getLocation(): Internal.Point;
        getDropAction(): number;
        getSource(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get y(): number
        get dragSourceContext(): Internal.DragSourceContext
        get gestureModifiers(): number
        get targetActions(): number
        get userAction(): number
        get gestureModifiersEx(): number
        get location(): Internal.Point
        get dropAction(): number
        get source(): any
    }
    type DragSourceDragEvent_ = DragSourceDragEvent;
    interface IScopedVariableStorage {
        abstract getScoped(arg0: number): any;
        abstract setScoped(arg0: number, arg1: any): void;
    }
    type IScopedVariableStorage_ = IScopedVariableStorage;
}
declare namespace net.minecraft.world.inventory {
    interface ContainerListener {
        abstract dataChanged(arg0: Internal.AbstractContainerMenu_, arg1: number, arg2: number): void;
        abstract slotChanged(arg0: Internal.AbstractContainerMenu_, arg1: number, arg2: Internal.ItemStack_): void;
    }
    type ContainerListener_ = ContainerListener;
}
declare namespace icyllis.modernui.graphics {
    class Point {
        constructor()
        constructor(p: icyllis.modernui.graphics.Point_)
        constructor(x: number, y: number)
        getClass(): typeof any;
        static copy(p: icyllis.modernui.graphics.Point_): icyllis.modernui.graphics.Point;
        toString(): string;
        set(p: icyllis.modernui.graphics.Point_): void;
        notifyAll(): void;
        copy(): this;
        notify(): void;
        negate(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        offset(dx: number, dy: number): void;
        wait(): void;
        wait(arg0: number): void;
        set(x: number, y: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        x: number;
        y: number;
    }
    type Point_ = Point;
}
