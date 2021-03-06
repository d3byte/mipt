/**
 * MIPT Service API
 * This is MIPT microservice
 *
 * OpenAPI spec version: 0.1
 * Contact: support@digitory.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ModelsAnswerInterface } from './modelsAnswerInterface';
import { ModelsOptions } from './modelsOptions';

export interface ModelsQuestionInterface { 
    answerType?: string;
    answers?: Array<ModelsAnswerInterface>;
    options?: ModelsOptions;
    question?: string;
}