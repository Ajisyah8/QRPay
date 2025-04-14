<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LiburanResource\Pages;
use App\Filament\Resources\LiburanResource\RelationManagers;
use App\Models\Liburan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Forms\Components\FileUpload;

class LiburanResource extends Resource
{
    protected static ?string $model = Liburan::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-asia-australia';
    public static ?string $navigationGroup = 'Manajemen Konten';

    public static function getPluralModelLabel(): string
    {
        return 'Liburan';
    }

    public static function getModelLabel(): string
    {
        return 'Liburan';
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
                    ->directory('liburan-images')
                    ->imagePreviewHeight('150')
                    ->maxSize(1024)
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
            'index' => Pages\ListLiburans::route('/'),
            'create' => Pages\CreateLiburan::route('/create'),
            'edit' => Pages\EditLiburan::route('/{record}/edit'),
        ];
    }
}
