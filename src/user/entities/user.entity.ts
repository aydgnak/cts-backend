import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })
export class User {
  @Prop({ type: SchemaTypes.String, required: true, unique: true })
  username: string;

  @Prop({ type: SchemaTypes.String, required: true })
  password: string;

  @Prop({ type: SchemaTypes.String, required: true })
  email: string;

  @Prop({ type: SchemaTypes.Boolean, default: true })
  is_active: boolean;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  is_verified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
