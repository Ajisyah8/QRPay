<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PromoResource\Pages;
use App\Filament\Resources\PromoResource\RelationManagers;
use App\Models\Promo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Forms\Components\FileUpload;

class PromoResource extends Resource
{
    protected static ?string $model = Promo::class;

    protected static ?string $navigationIcon = 'heroicon-o-presentation-chart-line';
    public static ?string $navigationGroup = 'Manajemen Konten';

    public static function getPluralModelLabel(): string
    {
        return 'Promo';
    }

    public static function getModelLabel(): string
    {
        return 'Promo';
    }


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Hidden::make('user_id')
                    ->default(\Illuminate\Support\Facades\Auth::user()?->id),
                Forms\Components\TextInput::make('judul')
                    ->required()
                    ->maxLength(255),
                // Forms\Components\RichEditor::make('deskripsi')
                //     ->required()
                //     ->columnSpanFull(),
                FileUpload::make('gambar')
                    ->image()
                    ->directory('promo-images')
                    ->imagePreviewHeight('150')
                    ->maxSize(1024)
                    ->required(),
                Forms\Components\Select::make('status')
                    ->options([
                        'on' => 'Aktif',
                        'off' => 'Tidak Aktif',
                    ])
                    ->default('off')
                    ->required(),

                Forms\Components\DatePicker::make('tgl_mulai')
                    ->label('Tanggal Mulai')
                    ->required(),

                Forms\Components\DatePicker::make('tgl_selesai')
                    ->label('Tanggal Selesai')
                    ->required(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('judul')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('gambar')
                    ->disk('public')
                    ->height(60),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn(string $state): string => $state === 'on' ? 'success' : 'danger'),

                Tables\Columns\TextColumn::make('tgl_mulai')
                    ->label('Mulai')
                    ->date(),

                Tables\Columns\TextColumn::make('tgl_selesai')
                    ->label('Selesai')
                    ->date(),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPromos::route('/'),
            'create' => Pages\CreatePromo::route('/create'),
            'edit' => Pages\EditPromo::route('/{record}/edit'),
        ];
    }
}
