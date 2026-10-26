import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//respo sepe//
export interface StandartResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, StandartResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandartResponse<T>> {
   
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode; 
   
  return next.handle().pipe(
      map((data) => ({
        success: true,
        message: 'Request berhasil',
        statusCode: statusCode,
        data: data, // Jangan lupa sertakan data aslinya di sini
      })), // <-- Pastikan ada tutup kurung untuk map dan pipe
    );
  }
}